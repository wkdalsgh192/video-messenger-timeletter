package com.caterpie.timeletter.service;

import com.caterpie.timeletter.dto.LetterDto;

public interface LetterService {
	/* C :: 레터 생성 */
	void createLetter(LetterDto letterDto);
}
