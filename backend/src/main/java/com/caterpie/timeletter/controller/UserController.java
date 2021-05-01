package com.caterpie.timeletter.controller;

import java.util.HashMap;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.caterpie.timeletter.dto.User;
import com.caterpie.timeletter.service.UserService;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	/**
	 * @apiNote 회원가입
	 */
	@Transactional()
	@ApiOperation(value = "Insert User Info", notes = "회원가입")
	@PostMapping("/join")
	public ResponseEntity<?> createUser(@RequestBody User user) {
		// Post 방식으로 들어왔다. => User 객체로 들어옴
		try {
			userService.insertUser(user);
			
		} catch (Exception e) {
			return new ResponseEntity<String>("fail",HttpStatus.BAD_REQUEST);	
		}
		return new ResponseEntity<String>("success",HttpStatus.CREATED);
	}
	
	/**
	 * @apiNote 회원 정보 상세 조회
	 * @return Map
	 */
	@ApiOperation(value= "Get User Detail", notes="상세 조회")
	@GetMapping("/detail")
	public ResponseEntity<Map<String,Object>> detailUser(String email) throws Exception {
		HttpStatus status = null;
		Map<String,Object> map = new HashMap<>();
		
		return new ResponseEntity<Map<String,Object>> (map,status);	
	}
	
	
	/**
	 * @apiNote 회원 정보 수정(비밀번호 수정)
	 */
	@ApiOperation(value= "Update User Info", notes="회원 정보 수정")
	@PutMapping("/update")
	public ResponseEntity<String> updateUser(@RequestBody User user) {
		try {
			userService.updateUser(user);
		} catch (Exception e) {
			return new ResponseEntity<String>("회원 정보를 수정할 수 없습니다.", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<String>("회원 정보 수정 완료", HttpStatus.OK);
//		if (userService.updateUser(user)) return new ResponseEntity<String>("회원 정보 수정 완료", HttpStatus.OK);
//		else return new ResponseEntity<String>("회원 정보를 수정할 수 없습니다.", HttpStatus.NO_CONTENT);
	}
	
	/**
	 * @apiNote 회원 정보 삭제
	 */
	@ApiOperation(value="Delete User Info", notes="회원 정보 삭제")
	@DeleteMapping("/delete")
	public ResponseEntity<?> deleteUser(@RequestParam("id") int userId) {
		try {
			userService.deleteUser(userId);
		} catch (Exception e) {
			return new ResponseEntity<String>("회원 정보를 찾을 수 없습니다.",HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>("삭제 완료", HttpStatus.OK);
	}
	
	/**
	 * @apiNote 로그인
	 * @return true(로그인 성공), false(로그인 실패)
	 */
	@ApiOperation(value= "Get User Info", notes = "로그인")
	@PostMapping("/login")
	public boolean loginUser(@RequestBody User user) {
		try {
			if (userService.loginUser(user)) return true;
			else return false;
		} catch (Exception e) {
			return false;
		}
	}
}

