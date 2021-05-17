package com.caterpie.timeletter.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caterpie.timeletter.dto.LetterInfoDto;
import com.caterpie.timeletter.entity.Alarm;
import com.caterpie.timeletter.repository.AlarmRepository;

@Service
public class AlarmServiceImpl implements AlarmService{
	@Autowired
	private AlarmRepository alarmRepository;

	@Override
	public List<LetterInfoDto> getAlarms(int userId) {
		List<LetterInfoDto> lid = new ArrayList<LetterInfoDto>();
		List<Alarm> myAlarms = alarmRepository.findALLByUserId(userId);
		
		for(int i=0, l=myAlarms.size(); i<l; i++) {
			lid.add(alarmRepository.getLetter(myAlarms.get(i).getLetter_id()));
		}
		return lid;
	}
	
	
	
	
}
