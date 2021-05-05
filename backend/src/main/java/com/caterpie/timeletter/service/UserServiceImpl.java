package com.caterpie.timeletter.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caterpie.timeletter.controller.SaltSHA256;
import com.caterpie.timeletter.dto.User;
import com.caterpie.timeletter.model.request.JoinRequest;
import com.caterpie.timeletter.model.request.LoginRequest;
import com.caterpie.timeletter.model.request.UserModifyRequest;
import com.caterpie.timeletter.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public void insertUser(JoinRequest joinReq) {
		// 1. 가입할 회원의 고유 salt 생성 및 저장
		String salt = SaltSHA256.generateSalt();
		// 2. 입력된 비밀번호 + salt 활용해서 암호화된 비밀번호 생성
		String password = SaltSHA256.getEncrypt(joinReq.getPassword(), salt);
		
		User user = User.builder()
				.password(password)
				.phone(joinReq.getPhone())
				.name(joinReq.getName())
				.email(joinReq.getEmail())
				.salt(salt)
				.build();
		
		System.out.println(user.toString());
		// 4. 유저 정보 DB에 삽입
		userRepo.save(user);
	}

	@Override
	public void updateUser(UserModifyRequest modReq) {
		
		int userId = modReq.getUserId();
		String salt = SaltSHA256.generateSalt();
		String password = SaltSHA256.getEncrypt(modReq.getPassword(), salt);
		
		userRepo.updateUser(modReq.getName(), password, salt, modReq.getPhone(), userId);
		
	}
	
	@Override
	public void deleteUser(int userId) {
		userRepo.deleteById(userId);
	}
	
	@Override
	public int loginUser(LoginRequest loginReq) {
		String email = loginReq.getId();	//입력한 id
		System.out.println("sadf1111");
		System.out.println(userRepo.findByEmail(email).toString());
		System.out.println("sadf2222");
		String salt = userRepo.findByEmail(email).getSalt();
		String password = loginReq.getPw(); //입력한 pw
		password = SaltSHA256.getEncrypt(password, salt);	//암호화된 pw
		System.out.println("sadf333");
		User user = userRepo.findByEmailAndPassword(email, password);
		System.out.println(user.toString());
		System.out.println("sadf4444");
		if(user != null)
			return user.getUserId();
		else 
			return -1;
	}
	
}
