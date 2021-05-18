package com.caterpie.timeletter.repository;

import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.caterpie.timeletter.dto.LetterInfoDto;
import com.caterpie.timeletter.entity.Alarm;

@Repository
public interface AlarmRepository extends JpaRepository<Alarm, Integer> {
	@Query(value="select u.user_id, t.letter_id, l.letter_code, t.phone_number from user u, target t, letter l where u.phone_number=t.phone_number and t.letter_id=l.letter_id and l.is_open = 0 and l.open_date = curdate();", nativeQuery=true)
	List<Map<Alarm, Object>> findClosedLetters();
	
	@Transactional
	@Modifying
	@Query(value="update letter set is_private=false, is_open=true where letter_id = ?;", nativeQuery=true)
	void updateLetter(int letterId);
	
	@Transactional
	@Modifying
	@Query(value="insert into alarm values (? , ?)", nativeQuery=true)
	void insertAlarm(int userId, int letterId);
	
	@Query(value="select * from alarm where user_id= ?", nativeQuery=true)
	List<Map<Alarm, Object>> findALLByUserId(int userId);
	
	@Query(value="select letter_id, title, url, message, open_date, latitude, longitude, is_private, is_open, user.user_id, name from letter inner join user on letter.user_id = user.user_id where letter_id= ?", nativeQuery=true)
	Map<LetterInfoDto, Object> getLetter(int letterId);
}
	