package com.caterpie.timeletter.repository;

import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.caterpie.timeletter.entity.Alarm;

@Repository
public interface AlarmRepository extends JpaRepository<Alarm, Integer> {
	@Query(value="select letter_id, user_id from letter where is_open = 0 and open_date = curdate()", nativeQuery=true)
	List<Map<Alarm, Object>> findClosedLetters();
	
	@Transactional
	@Modifying
	@Query(value="update letter set is_private=false, is_open=true where letter_id = ?;", nativeQuery=true)
	void updateLetter(int letterId);
	
	@Transactional
	@Modifying
	@Query(value="insert into alarm values (? , ?)", nativeQuery=true)
	void insertAlarm(int userId, int letterId);
}
