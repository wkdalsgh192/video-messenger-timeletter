package com.caterpie.timeletter.service;

import java.util.List;
import java.util.Map;

import com.caterpie.timeletter.dto.LetterInfoDto;

public interface AlarmService {

	List<LetterInfoDto> getAlarms(int userId);

}
