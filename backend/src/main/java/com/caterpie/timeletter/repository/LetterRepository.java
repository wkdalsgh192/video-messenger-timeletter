package com.caterpie.timeletter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caterpie.timeletter.entity.Letter;

public interface LetterRepository extends JpaRepository<Letter, Integer> {

}
