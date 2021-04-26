package io.capsule.userservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.capsule.userservice.dto.User;
import io.capsule.userservice.service.UserService;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@ApiOperation(value = "User Insert", notes = "회원가입")
	@PostMapping("/signup")
	public ResponseEntity<String> createUser(@RequestBody User user) throws Exception {
		// Post 방식으로 들어왔다. => User 객체로 들어옴
		
		// 서비스 로직으로 넘겨준다
		if (userService.insertUser(user) > 0)
			return new ResponseEntity<String>(user.getName()+" 회원님 환영합니다!", HttpStatus.OK);
		
		return new ResponseEntity<String>("회원 가입 실패", HttpStatus.NO_CONTENT);
	}
}
