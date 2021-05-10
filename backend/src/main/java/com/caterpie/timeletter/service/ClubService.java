package com.caterpie.timeletter.service;

import com.caterpie.timeletter.dto.ClubDto;
import com.caterpie.timeletter.dto.ClubJoinDto;

public interface ClubService {
	void insertClub(ClubDto clubReq);
	void deleteClub(int clubId);
	void joinClub(ClubJoinDto joinReq);
}
