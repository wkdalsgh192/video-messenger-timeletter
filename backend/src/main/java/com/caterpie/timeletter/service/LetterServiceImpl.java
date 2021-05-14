package com.caterpie.timeletter.service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caterpie.timeletter.dto.LetterDto;
import com.caterpie.timeletter.entity.Letter;
import com.caterpie.timeletter.entity.Target;
import com.caterpie.timeletter.entity.User;
import com.caterpie.timeletter.repository.LetterRepository;
import com.caterpie.timeletter.repository.TargetRepository;
import com.caterpie.timeletter.repository.UserRepository;

@Service
public class LetterServiceImpl implements LetterService {

	private static final Logger logger = LoggerFactory.getLogger(LetterServiceImpl.class);
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private LetterRepository letterRepo;
	
	@Autowired
	private TargetRepository targetRepo;
	
	@Override
	public int createLetter(LetterDto letterDto){
		
		// user_has_letter에 업데이트
		Letter letter = Letter.builder()
				.title(letterDto.getTitle())
				.message(letterDto.getMessage())
				.openDate(letterDto.getOpenDate())
				.latitude(new BigDecimal(letterDto.getLatitude()))
				.longitude(new BigDecimal(letterDto.getLongitude()))
				.alert(letterDto.isAlert())
				.isPrivate(letterDto.isPrivate())
				.isOpen(letterDto.isOpen())
				.build();
		
		int letterId = -1;
		try {
			User user = userRepo.findById(letterDto.getUserId()).get();
			List<Letter> letters = user.getLetters();
			letters.add(letter);
			user.setLetters(letters);
//			user.setLetters(Collections.singleton(letter));
			userRepo.save(user);
			
			Letter result = letterRepo.save(letter);
			letterId = result.getLetterId();
			List<String> list = letterDto.getPhoneNumber();
			if (!list.isEmpty()) {
				list.stream().forEach(s -> {
					Target target = Target.builder()
							.letterId(result.getLetterId())
							.phoneNumber(s)
							.build();
					targetRepo.save(target);
				});
			}
		} catch (Exception e) {
			logger.error("Error Occurs!!", e);
		}
		
		return letterId;

	}

	@Override
	public void saveFile(int letterId, String url) throws Exception {
		Letter letter = letterRepo.findById(letterId).get();
		letter.setUrl(url);
		letterRepo.save(letter);
	}
	
//	@Override
//	public Map<String,Letter> getAllLetters(User user) {
//		
//		// 유저 휴대폰 번호 가지고 오기
//		String phoneNumber = user.getPhone();
//		// target table과 letter 테이블을 조인해서 새로운 테이블 생성
//		// 해당 테이블에서 유저 휴대폰 번호와 일치하는 정보 가지고 오기
//		List<Letter> letters = letterRepo.findWithTargetsByPhoneNumber(phoneNumber);
//		
//		// 해당 레터의 소유자 id를 가지고 유저 정보 찾기
//		// 둘을 매핑하여 반환?
//		Map<String, Letter> map = new HashMap<>();
//		letters.stream().forEach(letter -> {
//			User opt = userRepo.findById(letter.getUserId()).get();
//			map.put(opt.getName(), letter);
//		});
//		
//		return map;
//	}

}
