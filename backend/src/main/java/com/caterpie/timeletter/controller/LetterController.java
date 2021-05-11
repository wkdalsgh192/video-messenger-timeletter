package com.caterpie.timeletter.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.caterpie.timeletter.dto.LetterDto;
import com.caterpie.timeletter.service.LetterService;


@RestController
@RequestMapping("/letter")
public class LetterController {
	
	@Autowired
	private LetterService letterService;
	
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
	
	@GetMapping("/")
	public ModelAndView hello() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("uploader");
		return modelAndView;
	}
	
	@PostMapping(path="/create", consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<?> createLetter(LetterDto letterDto, @RequestParam("file") MultipartFile file) {
		
		// 영상 데이터 저장
		String url = new String();
		String fileName = file.isEmpty() ? "" : file.getOriginalFilename();
		try {
			url = "".equals(fileName) ? "" : "C:\\Users\\multicampus\\Desktop\\test\\"+fileName;
			file.transferTo(new File(url));

			letterDto.setUrl(url);
			letterService.createLetter(letterDto);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		logger.debug(letterDto.toString());
		return ResponseEntity.ok("File Uploaded Successfully!");
	}
	
}	
