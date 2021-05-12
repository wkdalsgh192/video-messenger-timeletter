package com.caterpie.timeletter.service;

import java.math.BigDecimal;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caterpie.timeletter.dto.LetterDto;
import com.caterpie.timeletter.entity.Letter;
import com.caterpie.timeletter.entity.User;
import com.caterpie.timeletter.repository.LetterRepository;
import com.caterpie.timeletter.repository.UserRepository;

@Service
public class LetterServiceImpl implements LetterService {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private LetterRepository letterRepo;
	
	@Override
	public void createLetter(LetterDto letterDto) {
		
		// user_has_letter에 업데이트
		Letter letter = Letter.builder()
				.clubId(0)
				.title(letterDto.getTitle())
				.message(letterDto.getMessage())
				.url(letterDto.getUrl())
				.openDate(letterDto.getOpenDate())
				.latitude(new BigDecimal(letterDto.getLatitude()))
				.longitude(new BigDecimal(letterDto.getLongitude()))
				.alert(letterDto.isAlert())
				.isPrivate(letterDto.isPrivate())
				.isOpen(letterDto.isOpen())
				.build();
		
		try {
			User user = userRepo.findById(letterDto.getUserId()).get();
			user.setLetters(Collections.singleton(letter));
			
			letterRepo.save(letter);
			userRepo.save(user);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
