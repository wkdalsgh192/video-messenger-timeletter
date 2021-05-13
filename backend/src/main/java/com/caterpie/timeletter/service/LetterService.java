package com.caterpie.timeletter.service;

import com.caterpie.timeletter.dto.LetterDto;

public interface LetterService {
	/* C :: 레터 생성 */
	int createLetter(LetterDto letterDto);
	
	void saveFile(int letterId, String url) throws Exception;
}
