package com.caterpie.timeletter.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.caterpie.timeletter.dto.ClubJoinDto;
import com.caterpie.timeletter.entity.Club;

@Repository
public interface ClubRepository extends JpaRepository<Club, Integer> {
	Club findByClubName(String clubName);

	@Transactional
	@Modifying
	@Query(value="insert into club_member values(?, ?)", nativeQuery=true)
	void joinClub(int userId, int clubId);
	
}

