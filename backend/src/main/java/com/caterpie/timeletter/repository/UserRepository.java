package com.caterpie.timeletter.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.caterpie.timeletter.dto.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	
//	@Query(value="select * from user where email=:email and password=:password", nativeQuery=true)
//	User findUser(String email, String password);
	
	User findByEmail(String email);
	
	User findByEmailAndPassword(String email, String password);

	@Transactional
	@Modifying
	@Query(value="update user set  name= ?, password = ?, salt = ?, phone =? where user_id = ?", nativeQuery=true)
	void updateUser(String name, String password, String salt, String phone, int userId);
	
	@Transactional
	@Modifying
	void deleteByEmail(String email);
}

