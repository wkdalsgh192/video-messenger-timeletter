package com.caterpie.timeletter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import com.caterpie.timeletter.entity.Letter;

public interface LetterRepository extends JpaRepository<Letter, Integer> {

//	@EntityGraph(attributePaths = "targets")
//	// 타겟 리스트를 이미들고와야한다.
//	List<Letter> findWithTargetsByPhoneNumber(String phoneNumber);
	
}
