package com.caterpie.timeletter.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.caterpie.timeletter.dto.LetterDto;
import com.caterpie.timeletter.dto.LetterInfoDto;
import com.caterpie.timeletter.entity.Letter;
import com.caterpie.timeletter.entity.User;
import com.caterpie.timeletter.service.LetterService;
import com.caterpie.timeletter.service.UserService;
import com.caterpie.timeletter.util.EncoderUtil;


@RestController
@RequestMapping("/letter")
public class LetterController {
	
	@Autowired
	private LetterService letterService;
	
	@Autowired
	private UserService userService;
	
	private static final Logger logger = LoggerFactory.getLogger(LetterController.class);
	
	@GetMapping("/retrieve/{letterCode}")
	public ResponseEntity<Map<String, Letter>> retrieveLetter(@PathVariable String letterCode) throws FileNotFoundException {
		// 유저 아이디 확인 및 레터 아이디 확인
		// 일치하는 경우 url 가져오기
		Optional<Letter> letter = letterService.retrieveLetter(letterCode);
		if (!letter.isPresent()) return ResponseEntity.noContent().build();
		Optional<User> user = userService.getUserById(letter.get().getUserId());
		if (!user.isPresent()) return ResponseEntity.noContent().build();
		Map<String, Letter> map = new HashMap<>();
		map.put(user.get().getName(), letter.get());
		return new ResponseEntity<>(map,HttpStatus.OK);
	}
	
	@GetMapping(path="/load/{letterId}")
	public ResponseEntity<InputStreamResource> loadFile(@PathVariable("letterId") int letterId) throws FileNotFoundException {
		File file = letterService.retrieveFile(letterId);
		if (file == null) return ResponseEntity.noContent().build();
		System.out.println(file.toString());
		InputStream inputStream = new FileInputStream(file.getAbsoluteFile());
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept-Ranges", "bytes");
		headers.set("Content-Type", "video/mp4");
		headers.set("Content-Range", "bytes 50-1025/17839845");
		headers.set("Content-Length", String.valueOf(file.length()));
		return new ResponseEntity<InputStreamResource>(new InputStreamResource(inputStream),headers,HttpStatus.OK);
	}
	
	@GetMapping(path="/retrieve")
	public ResponseEntity<?> getAllLetters() {
		Optional<User> opt = userService.getCurrentUserWithAuthorities();
		
		if (opt.isPresent()) {
			List<LetterInfoDto> arr = letterService.getAllLetters(opt.get());
			return new ResponseEntity<>(arr, HttpStatus.OK);
		} else return ResponseEntity.noContent().build();
	}
	

	@PostMapping(path="/create")
	public ResponseEntity<?> createLetter(@RequestBody LetterDto letterDto) {
		Optional<User> opt = Optional.ofNullable(userService.getCurrentUserWithAuthorities().orElseThrow());
		
		int letterId;
		letterId = letterService.createLetter(letterDto, opt.get().getUserId());
		if (letterId < 0) return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		return new ResponseEntity<>(letterId,HttpStatus.OK);
	}
	
	@PostMapping(path="/save/{letterId}", consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<?> saveFile(@PathVariable("letterId") int letterId, @RequestPart("file") MultipartFile origin, @RequestParam("os") boolean os) throws Exception {
		
		try {
			// 도착하는 곳의 url 주소
			String path = "/videos/"+letterId+"/";
            // 백엔드 도커 컨테이너 안 도커 볼륨 주소로 저장
			String url = path+origin.getOriginalFilename();
			File file = new File(url);
            // URL 상 letterid로 된 부모 디렉토리가 없을 경우 디렉토리 생성
			if (!file.getParentFile().exists()) file.getParentFile().mkdirs();
            // 파일을 저장
			origin.transferTo(new File(url));
			
            // iOS에서 촬영된 영상은 h265 HEVC 코덱을 사용하므로 h264로 인코딩을 해주어야한다.
			if (os) {
                // 인코더 유틸을 사용하여 인코딩 진행
				EncoderUtil encoder = new EncoderUtil();
				url = encoder.encode(origin, path);
			}
			
			letterService.saveFile(letterId, url);
		} catch (Exception e) {
			logger.error("Error occurs!!",e);
            // 파일 저장에 문제가 생기는 경우 cascade로 letter 삭제
			letterService.deleteLetter(letterId);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			
		}
		return ResponseEntity.ok("File Uploaded Successfully!");
	}
	
	@GetMapping(path="/count")
	public ResponseEntity<Integer> countLetter() {
		int cnt = (int) letterService.countLetter();
		logger.info(""+cnt);
		
		return new ResponseEntity<>(cnt,HttpStatus.OK);
	}
	
}	
