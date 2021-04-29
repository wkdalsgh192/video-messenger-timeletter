package io.capsule.user.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import io.capsule.user.dto.User;

public interface UserRepo extends CrudRepository<User, Integer> {

	@Query(value="select * from user where email=:email and password=:password", nativeQuery=true)
	User findUser(String email, String password);
	
	@Query(value="select salt from user where email=:email", nativeQuery=true)
	String findSalt(String email);

	@Transactional
	@Modifying
	@Query(value="update user set password= :password where email= :email", nativeQuery=true)
	void updateUser(String email, String password);
	
	@Transactional
	@Modifying
	@Query(value="delete from user where email=:email", nativeQuery=true)
	void delete(String email);
}
