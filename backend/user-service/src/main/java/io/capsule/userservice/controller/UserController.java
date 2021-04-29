package io.capsule.userservice.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	/* C :: 회원 가입 */
	@ApiOperation(value = "Insert User Info", notes = "회원가입")
	@PostMapping("/signup")
	public ResponseEntity<String> createUser(@RequestBody User user) throws Exception {
		// Post 방식으로 들어왔다. => User 객체로 들어옴
		
		// 서비스 로직으로 넘겨준다
		if (userService.insertUser(user))
			return new ResponseEntity<String>(user.getName()+" 회원님 환영합니다!", HttpStatus.OK);
		
		return new ResponseEntity<String>("회원 가입 실패", HttpStatus.NO_CONTENT);
	}
	
	/* R :: 회원 정보 상세 조회 */
	@ApiOperation(value= "Get User Detail", notes="상세 조회")
	@GetMapping("/detail")
	public ResponseEntity<Map<String,Object>> detailUser(String email) throws Exception {
		HttpStatus status = null;
		Map<String,Object> map = new HashMap<>();
		
		return new ResponseEntity<Map<String,Object>> (map,status);	
	}
	
	
	/* U :: 회원 정보 수정 */
	@ApiOperation(value= "Update User Info", notes="회원 정보 수정")
	@PutMapping("/update")
	public ResponseEntity<String> updateUser(User user) throws Exception {
		// 회원 정보 수정 서비스
		if (userService.updateUser(user)) return new ResponseEntity<String>("회원 정보 수정 완료", HttpStatus.OK);
		else return new ResponseEntity<String>("회원 정보를 수정할 수 없습니다.", HttpStatus.NO_CONTENT);
	}
	
	/* D :: 회원 정보 삭제 */
	@ApiOperation(value="Delete User Info", notes="회원 정보 삭제")
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteUser(String email) throws Exception {
		if (userService.deleteUser(email)) return new ResponseEntity<String>("삭제 완료", HttpStatus.OK);
		else return new ResponseEntity<String>("회원 정보를 찾을 수 없습니다.",HttpStatus.NO_CONTENT);
				
	}
	
	@ApiOperation(value= "Get User Info", notes = "로그인")
	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody User user) throws Exception {
		
		if (userService.loginUser(user)) return new ResponseEntity<String>("로그인 성공!", HttpStatus.OK);
		else return new ResponseEntity<String>("로그인 실패", HttpStatus.NO_CONTENT);

	}
}
