package com.caterpie.timeletter.service;

import com.caterpie.timeletter.dto.ClubDto;
import com.caterpie.timeletter.dto.ClubJoinDto;
import com.caterpie.timeletter.entity.Club;

public interface ClubService {
	void insertClub(ClubDto clubReq);
	void deleteClub(int clubId);
	void joinClub(int userId, int clubId);
}
