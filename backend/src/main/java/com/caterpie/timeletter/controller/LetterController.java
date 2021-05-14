package com.caterpie.timeletter.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
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
	
	@GetMapping("/{fileName}")
	public ResponseEntity<InputStreamResource> retrieveMediaFile(@PathVariable String fileName) throws FileNotFoundException {
		File file = new File("C:\\Users\\multicampus\\Desktop\\test\\"+fileName+".mp4");
		System.out.println(file.toString());
		InputStream inputStream = new FileInputStream("C:\\Users\\multicampus\\Desktop\\test\\"+fileName+".mp4");
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept-Ranges", "bytes");
		headers.set("Content-Type", "video/mp4");
		headers.set("Content-Range", "bytes 50-1025/17839845");
		headers.set("Content-Length", String.valueOf(file.length()));
		return new ResponseEntity<>(new InputStreamResource(inputStream),headers,HttpStatus.OK);
	}
	
//	@GetMapping(path="/get")
//	public ResponseEntity<?> getAllLetters() {
//		Optional<User> opt = userService.getCurrentUserWithAuthorities();
//		
//		if (opt.isPresent()) {
//			Map<String,Letter> map = letterService.getAllLetters(opt.get());
//			return new ResponseEntity<>(map, HttpStatus.OK);
//		} else return ResponseEntity.noContent().build();
//	}
	

	@PostMapping(path="/create")
	public ResponseEntity<?> createLetter(@RequestBody LetterDto letterDto) {
		
		int letterId;
		letterId = letterService.createLetter(letterDto);
		if (letterId < 0) return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		return new ResponseEntity<>(letterId,HttpStatus.OK);
	}
	
	@PostMapping(path="/save/{letterId}", consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<?> saveFile(@PathVariable("letterId") int letterId, @RequestParam("file") MultipartFile video) throws IllegalStateException, IOException {
		
		String path = System.getProperty("user.dir");
		logger.debug("".equals(path)? "empty":path);
		logger.debug(path);
		logger.debug("hello");
		
		// 도착하는 곳의 url 주소
		File file = new File(path+"home/ubuntu/files/"+video.getOriginalFilename());
		if (!file.getParentFile().exists()) file.getParentFile().mkdirs();
		video.transferTo(file);
		
		logger.debug("hello1");
		logger.debug("hello2");
//		// 영상 데이터 저장
//		String url = "";
//		try {
//			url = "/var/jenkins_home/workspace/caterpie/files/"+file.getOriginalFilename();
//			file.transferTo(new File(url));
//			
//			letterService.saveFile(letterId, url);
//		} catch (Exception e) {
//			logger.debug("Failed to save a file");
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//		}
		
		return ResponseEntity.ok("File Uploaded Successfully!");
	}
	
	public static void main(String[] args) {
		System.out.println(System.getProperty("user.dir"));
	}
}	
