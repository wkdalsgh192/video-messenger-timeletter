package io.capsule.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.capsule.user.controller.SaltSHA256;
import io.capsule.user.dto.User;
import io.capsule.user.repository.UserRepo;
import io.capsule.user.repository.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	private UserRepo userRepo;

	@Override
	public boolean insertUser(User user) throws Exception {
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
			return false;
		}
		
		return true;
//		return userMapper.insertUser(user);
	}

	@Override
	public boolean updateUser(User user) throws Exception {
		// TODO Auto-generated method stub
		String email = user.getEmail();
		String salt = userRepo.findSalt(email);
		String password = SaltSHA256.getEncrypt(user.getPassword(), salt);
		
		try {
			userRepo.updateUser(email, password);
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return true;
	}
	
	@Override
	public boolean deleteUser(String email) throws Exception {
		
		try {
			userRepo.delete(email);
		} catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		
		return true;
	}
	
	@Override
	public boolean loginUser(User user) throws Exception {
		
		String email = user.getEmail();
		String salt = userRepo.findSalt(email);
		String password = user.getPassword();
		
		password = SaltSHA256.getEncrypt(password, salt);
		
		try {
			userRepo.findUser(user.getEmail(), password);
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return true;
	}
	
}
