package com.caterpie.timeletter.util;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.caterpie.timeletter.dto.AlarmDto;
import com.caterpie.timeletter.entity.Letter;
import com.caterpie.timeletter.repository.AlarmRepository;
import com.caterpie.timeletter.repository.LetterRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class AlarmScheduler {
	private static final Logger logger = LoggerFactory.getLogger(AlarmScheduler.class);

	@Autowired
	private AlarmRepository alarmRepository;
	
	@Autowired
	private LetterRepository letterRepository;

//	@Scheduled(cron = "0 1 0 * * *")	//매일 00시01분 실행
//	@Scheduled(cron = "0/10 * * * * *")	//10초에 한번씩 실행
	@Scheduled(cron = "0 0/1 * * * *") //1분에 한번씩 실행
    public void cronJob() {
    	logger.info("scheduled");
    	
    	//모든 유저에게 알람가도록 하기위해 비오픈레터이면서 오늘 오픈될레터들 조회
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String time = sdf.format(new Timestamp(System.currentTimeMillis()));
    	
		//오늘 오픈될 레터가 있는지 없는지
		Set<Letter> letters = letterRepository.findAllByIsOpenEqualsAndOpenDateEquals(false,time);
		if (!letters.isEmpty()) {
			List<Map<AlarmDto, Object>> alarms = alarmRepository.findToBeOpenedLetters();	
			
	    	//알람테이블에 하나씩 셋팅
	    	for(int i=0, l=alarms.size();i<l; i++) {
	    		Object o = alarms.get(i).get("user_id");
	    		int letterId = (int) alarms.get(i).get("letter_id");
	    		
	    		//오늘 오픈될 모든 레터들 비공개->공개 처리 & is_open = true
	    		alarmRepository.updateLetter(letterId);	
	    		System.out.println(letterId + ",  " + alarms.get(i).get("open_date"));
	    		//우리 서비스의 회원인 사람만 알람테이블에 삽입
	    		if(o == null)  continue;
	    		alarmRepository.insertAlarm((int) o, letterId);	
	    	}
	    	
	    	
	    	// 알람 LetterId 가지고 Letter랑 Target 가지고 와서 Iterate하면서 회원,비회원 모두에게 문자 발송.
	    	alarms.stream().forEach(a -> {
	    		String letterCode = (String) a.get("letter_code");
	    		String phoneNumber = (String) a.get("phone_number");
//	    		MessageUtil message = new MessageUtil();
//	    		message.sendSms(phoneNumber, letterCode);
	    	});
	    	
	    	
	    	
	    	//클럽레터 오픈처리
	    	Set<Letter> clubsLetters = letterRepository.findAllByIsOpenEqualsAndOpenDateEqualsAndClubIdGreaterThan(false,time,0);
	    	clubsLetters.stream().forEach(a ->{
	    		System.out.println(a.getLetterId() + ",  " + a.getOpenDate());
	    		alarmRepository.updateClub(a.getLetterId());
	    	});
	    	
	    	
		} else logger.info("Empty");
	}
}
