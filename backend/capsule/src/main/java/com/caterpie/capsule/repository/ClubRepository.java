package com.caterpie.capsule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.caterpie.capsule.dto.Club;

@Repository
public interface ClubRepository extends JpaRepository<Club, Integer> {
	Club findByClubName(String clubName);
	
}
