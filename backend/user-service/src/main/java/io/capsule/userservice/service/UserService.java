package io.capsule.userservice.service;

import io.capsule.userservice.dto.User;

public interface UserService {
	/* C :: 회원 가입 */
	int insertUser(User user) throws Exception;
}
