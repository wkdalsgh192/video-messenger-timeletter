package com.caterpie.timeletter.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caterpie.timeletter.controller.SaltSHA256;
import com.caterpie.timeletter.dto.User;
import com.caterpie.timeletter.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public void insertUser(User user) {
		// 1. 가입할 회원의 고유 salt 생성 및 저장
		String salt = SaltSHA256.generateSalt();
		user.setSalt(salt);
		
		// 2. 입력된 비밀번호 + salt 활용해서 암호화된 비밀번호 생성
		String password = user.getPassword();
		password = SaltSHA256.getEncrypt(password, salt);
		
		// 3. 입력 비밀번호 삽입
		user.setPassword(password);
		
		// 4. 유저 정보 DB에 삽입
		userRepo.save(user);
	}

	@Override
	public void updateUser(User user) {
		int userId = user.getUserId();
		String salt = SaltSHA256.generateSalt();
		String password = SaltSHA256.getEncrypt(user.getPassword(), salt);
		
		userRepo.updateUser(password, salt, userId);
		
	}
	
	@Override
	public void deleteUser(int userId) {
		userRepo.deleteById(userId);
	}
	
	@Override
	public boolean loginUser(User user) {
		String email = user.getEmail();	//입력한 id
		String salt = userRepo.findByEmail(email).getSalt();
		String password = user.getPassword(); //입력한 pw
		password = SaltSHA256.getEncrypt(password, salt);	//암호화된 pw
		
		User dbUser =  userRepo.findByEmail(email);	//입력한 id로 DB에서 가져온 User
		
		if(dbUser.getEmail().equals(email) && dbUser.getPassword().equals(password))
			return true;
		else
			return false;
		
	}
	
}
