package com.caterpie.timeletter.service;

import java.util.Map;
import java.util.Optional;

import com.caterpie.timeletter.dto.LetterDto;
import com.caterpie.timeletter.entity.Letter;
import com.caterpie.timeletter.entity.User;

public interface LetterService {
	/* C :: 레터 생성 */
	int createLetter(LetterDto letterDto);
	
	/* C :: 레터 영상 조회 */
	Optional<Letter> retrieveLetter(String letterCode);
	Map<String,Letter> getAllLetters(User user);
	
	void saveFile(int letterId, String url) throws Exception;
	
}
