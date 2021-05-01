package com.caterpie.timeletter.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.caterpie.timeletter.dto.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query(value="select * from user where email=:email and password=:password", nativeQuery=true)
	User findUser(String email, String password);
	//User findByEmailAndPassword(String email, String password);
	//@Query(value="select salt from user where email=:email", nativeQuery=true)
	User findByEmail(String email);
	
	User findByPassword(String password);

	@Transactional
	@Modifying
	@Query(value="update user set password = ?, salt = ? where user_id = ?", nativeQuery=true)
	void updateUser(String password, String salt, int userId);
	
	@Transactional
	@Modifying
//	@Query(value="delete from user where email=:email", nativeQuery=true)
	void deleteByEmail(String email);
}

