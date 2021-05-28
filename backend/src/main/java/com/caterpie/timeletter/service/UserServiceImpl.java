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
    // 회원 가입 서비스 로직
	public void insertUser(JoinDto joinDto) {
        // 주어진 이메일을 사용하여 중복 여부 확인 -> 중복된 경우 예외 발생
		if (userRepo.findOneWithAuthoritiesByEmail(joinDto.getEmail()).orElse(null) != null) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }
		
        // 유저 권한 설정
		Authority authority = Authority.builder()
                .authorityName("ROLE_USER")
                .build();
		
        // 유저 Builder를 사용해 필요한 컬럼 값 설정
		User user = User.builder()
				.email(joinDto.getEmail())
				.password(passwordEncoder.encode(joinDto.getPassword()))
				.phoneNumber(joinDto.getPhoneNumber())
				.name(joinDto.getName())
				.activated(true)
				.authorities(Collections.singleton(authority))
				.build();
		
        // 유저 정보 저장
		userRepo.save(user);
		logger.debug("user를 저장하였습니다.");
	}

	@Override
	public void updateUser(UserModifyDto modReq) {
		
	}
	
	@Override
    // 유저 테이블에 저장된 id(primary key)를 이용해 유저 정보 삭제
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
    // 현재 유저의 정보와 권한 가져오는 서비스 로직
    public Optional<User> getCurrentUserWithAuthorities() {
        // security util에서 jwt 토큰과 일치하는 인증 정보 확인 -> 유저 정보 가져오기
        return SecurityUtil
        		.getCurrentUsername().flatMap(userRepo::findOneWithAuthoritiesByEmail);
	}

	@Override
    // 유저 테이블에 저장된 id(primary key)를 이용해 유저 정보 찾기
	public Optional<User> getUserById(int userId) {
		return userRepo.findById(userId);
	}
}
