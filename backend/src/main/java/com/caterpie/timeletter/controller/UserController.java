package com.caterpie.timeletter.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import com.caterpie.timeletter.model.request.JoinRequest;
import com.caterpie.timeletter.model.request.LoginRequest;
import com.caterpie.timeletter.model.request.UserModifyRequest;
import com.caterpie.timeletter.repository.UserRepository;
import com.caterpie.timeletter.service.UserService;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	/**
	 * @apiNote 회원 전체 조회
	 */
	@ApiOperation(value= "Get All Users", notes="상세 조회")
	@GetMapping("/findAll")
	public List<User> FindAll() throws Exception {
		return userRepository.findAll();	
	}
	
	/**
	 * @apiNote 회원가입(*이메일 인증 추가해야함)
	 * @return HttpStatus
	 */
	@Transactional()
	@ApiOperation(value = "Insert User Info", notes = "회원가입")
	@PostMapping("/join")
	public ResponseEntity<?> createUser(@RequestBody JoinRequest joinReq) {
		try {
			userService.insertUser(joinReq);
			
		} catch (Exception e) {
			return new ResponseEntity<String>("fail",HttpStatus.BAD_REQUEST);	
		}
		return new ResponseEntity<String>("success",HttpStatus.CREATED);
	}
	
	/**
	 * @apiNote 회원 정보 상세 조회
	 * @return User
	 */
	@ApiOperation(value= "Get User Detail", notes="상세 조회")
	@GetMapping("/detail")
	public Optional<User> detailUser(int userId) throws Exception {
		return  userRepository.findById(userId);	
	}
	
	
	/**
	 * @apiNote 회원 정보 수정(비밀번호 수정)
	 */
	@ApiOperation(value= "Update User Info", notes="회원 정보 수정")
	@PutMapping("/update")
	public ResponseEntity<String> updateUser(@RequestBody UserModifyRequest modReq) {
		try {
			userService.updateUser(modReq);
		} catch (Exception e) {
			return new ResponseEntity<String>("회원 정보를 수정할 수 없습니다.", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<String>("회원 정보 수정 완료", HttpStatus.OK);
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
	 * @return user_id, JWT(아직 구현 덜함)
	 */
	@ApiOperation(value= "Login", notes = "로그인")
	@PostMapping("/login")
	public int loginUser(@RequestBody LoginRequest loginReq) {
		try {
			return userService.loginUser(loginReq);
		} catch (Exception e) {
			return -1;
		}
	}
}

