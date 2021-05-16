package com.caterpie.timeletter.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.caterpie.timeletter.dto.LetterDto;
import com.caterpie.timeletter.entity.Letter;
import com.caterpie.timeletter.entity.User;
import com.caterpie.timeletter.service.LetterService;
import com.caterpie.timeletter.service.UserService;


@RestController
@RequestMapping("/letter")
public class LetterController {
	
	@Autowired
	private LetterService letterService;
	
	@Autowired
	private UserService userService;
	
	private static final Logger logger = LoggerFactory.getLogger(LetterController.class);
	
	@GetMapping("/retrieve/{letterCode}")
	public ResponseEntity<Letter> retrieveLetter(@PathVariable String letterCode) throws FileNotFoundException {
		// 유저 아이디 확인 및 레터 아이디 확인
		// 일치하는 경우 url 가져오기
		Optional<Letter> letter = letterService.retrieveLetter(letterCode);
		// url에 맞게 file 가져오기
//		File file = new File(url);
//		System.out.println(file.toString());
//		InputStream inputStream = new FileInputStream(url);
//		HttpHeaders headers = new HttpHeaders();
//		headers.set("Accept-Ranges", "bytes");
//		headers.set("Content-Type", "video/mp4");
//		headers.set("Content-Range", "bytes 50-1025/17839845");
//		headers.set("Content-Length", String.valueOf(file.length()));
		if (!letter.isPresent()) return ResponseEntity.noContent().build();
		return new ResponseEntity<>(letter.get(),HttpStatus.OK);
	}
	
	@GetMapping(path="/retrieve")
	public ResponseEntity<?> getAllLetters() {
		Optional<User> opt = userService.getCurrentUserWithAuthorities();
		
		if (opt.isPresent()) {
			Map<String,Letter> map = letterService.getAllLetters(opt.get());
			return new ResponseEntity<>(map, HttpStatus.OK);
		} else return ResponseEntity.noContent().build();
	}
	

	@PostMapping(path="/create")
	public ResponseEntity<?> createLetter(@RequestBody LetterDto letterDto) {
		
		int letterId;
		letterId = letterService.createLetter(letterDto);
		if (letterId < 0) return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		return new ResponseEntity<>(letterId,HttpStatus.OK);
	}
	
	@PostMapping(path="/save/{letterId}", consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<?> saveFile(@PathVariable("letterId") int letterId, @RequestPart("file") MultipartFile video) throws Exception {
		
		// 도착하는 곳의 url 주소
//		String url = "/videos/"+video.getOriginalFilename();
		String url = "C:\\Users\\multicampus\\Desktop\\test\\"+video.getOriginalFilename();
		logger.debug(url);
		File file = new File(url);
		if (!file.getParentFile().exists()) file.getParentFile().mkdirs();
		try {
			letterService.saveFile(letterId, url);
			video.transferTo(file);
		} catch (Exception e) {
			logger.error("Error occurs!!",e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			
		}
		return ResponseEntity.ok("File Uploaded Successfully!");
	}
	
}	
