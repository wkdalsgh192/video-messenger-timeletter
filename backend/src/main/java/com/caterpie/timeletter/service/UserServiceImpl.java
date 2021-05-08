package com.caterpie.timeletter.service;

import java.util.Collections;
import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.caterpie.timeletter.dto.JoinDto;
import com.caterpie.timeletter.dto.UserModifyDto;
import com.caterpie.timeletter.entity.Authority;
import com.caterpie.timeletter.entity.User;
import com.caterpie.timeletter.jwt.JwtFilter;
import com.caterpie.timeletter.repository.UserRepository;
import com.caterpie.timeletter.util.SecurityUtil;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	
	private PasswordEncoder passwordEncoder;
	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

	public UserServiceImpl(UserRepository userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }
	
	
	@Override
	public void insertUser(JoinDto joinDto) {
		if (userRepo.findOneWithAuthoritiesByEmail(joinDto.getEmail()).orElse(null) != null) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }
		
		Authority authority = Authority.builder()
                .authorityName("ROLE_USER")
                .build();
		logger.debug("authority를 생성하였습니다.");
		
//		// 1. 가입할 회원의 고유 salt 생성 및 저장
//		String salt = SaltSHA256.generateSalt();
//		// 2. 입력된 비밀번호 + salt 활용해서 암호화된 비밀번호 생성
//		String password = SaltSHA256.getEncrypt(joinDto.getPassword(), salt);
		
		
		User user = User.builder()
				.email(joinDto.getEmail())
				.password(passwordEncoder.encode(joinDto.getPassword()))
				.phone(joinDto.getPhone())
				.name(joinDto.getName())
				.salt("1234")
				.activated(true)
				.authorities(Collections.singleton(authority))
				.build();
		logger.debug("user를 생성하였습니다.");
		

		userRepo.save(user);
		logger.debug("user를 저장하였습니다.");
	}

	@Override
	public void updateUser(UserModifyDto modReq) {
		
//		int userId = modReq.getUserId();
////		String salt = SaltSHA256.generateSalt();
//		String password = SaltSHA256.getEncrypt(modReq.getPassword(), salt);
//		userRepo.updateUser(modReq.getName(), password, salt, modReq.getPhone(), userId);
		
	}
	
	@Override
	public void deleteUser(int userId) {
		userRepo.deleteById(userId);
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<User> getUserWithAuthorities(String email) {
		return userRepo.findOneWithAuthoritiesByEmail(email);
	}

	@Override
    @Transactional(readOnly = true)
    public Optional<User> getAllUserWithAuthorities() {
        return SecurityUtil
        		.getCurrentUsername().flatMap(userRepo::findOneWithAuthoritiesByEmail);
    }
	
	
}
