package com.caterpie.capsule.controller;

import java.util.List;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.caterpie.capsule.dto.Club;
import com.caterpie.capsule.repository.ClubRepository;
import com.caterpie.capsule.service.ClubService;

import io.swagger.annotations.ApiOperation;

import javax.transaction.Transactional;

@RestController
@RequestMapping("/club")
public class ClubController {
	static final Logger logger = LoggerFactory.getLogger(ClubController.class);
	@Autowired
	private ClubRepository clubRepository;
	@Autowired
	ClubService service;
	
	
	@Transactional()
	@PostMapping(path="/insert")
	public ResponseEntity<?> insertClub(@RequestBody Club club) {
		try {
			service.insertClub(club);
		}catch (Exception e) {
			return new ResponseEntity<String>("fail",HttpStatus.BAD_REQUEST);		
		}
		return new ResponseEntity<String>("OK",HttpStatus.CREATED);
	}
	
	@GetMapping("/findAll")
	public List<Club> findAll() {
		return clubRepository.findAll();
	}
	
	@GetMapping("/findByName")
	public Club findByName(@RequestParam String name) {
		return clubRepository.findByClubName(name);
	}
	
	@ApiOperation(value = "게시물 id를 보내면 게시물과 관련 모든것 삭제", response = String.class)
	@DeleteMapping("/delClub")
	public ResponseEntity<?> delpost(@RequestParam("id") int clubId) {
		try {
			clubRepository.deleteById(clubId);
        }catch (Exception e) {
        	return new ResponseEntity<String>("fail",HttpStatus.BAD_REQUEST);
		}   	
    	return new ResponseEntity<String>("success",HttpStatus.OK);
	}
	
}
