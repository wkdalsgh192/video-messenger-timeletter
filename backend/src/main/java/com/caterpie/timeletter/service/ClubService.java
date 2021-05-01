package com.caterpie.timeletter.service;

import com.caterpie.timeletter.dto.Club;

public interface ClubService {
	void insertClub(Club club);
	void deleteClub(int clubId);
}
