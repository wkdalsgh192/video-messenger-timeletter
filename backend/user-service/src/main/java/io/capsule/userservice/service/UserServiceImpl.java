package io.capsule.userservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.capsule.userservice.controller.SaltSHA256;
import io.capsule.userservice.dto.User;
import io.capsule.userservice.repository.UserRepo;
import io.capsule.userservice.repository.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	private UserRepo userRepo;

	@Override
	public int insertUser(User user) throws Exception {
		// 1. 가입할 회원의 고유 salt 생성 및 저장
		String salt = SaltSHA256.generateSalt();
		user.setSalt(salt);
		
		// 2. 입력된 비밀번호 + salt 활용해서 암호화된 비밀번호 생성
		String password = user.getPassword();
		password = SaltSHA256.getEncrypt(password, salt);
		
		// 3. 입력 비밀번호 삽입
		user.setPassword(password);
		// 4. 유저 정보 DB에 삽입
		try {
			userRepo.save(user);
		} catch(IllegalArgumentException e) {
			e.printStackTrace();
			return 0;
		}
		
		return 1;
//		return userMapper.insertUser(user);
	}
	
	
}
