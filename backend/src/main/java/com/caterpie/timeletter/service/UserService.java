package com.caterpie.timeletter.service;

import com.caterpie.timeletter.dto.User;

public interface UserService {
	/* C :: 회원 가입 */
	void insertUser(User user);
	
	/* R :: 회원 정보 가져오기 */
	
	/* U :: 회원 가입 수정 */
	void updateUser(User user);
	
	/* D :: 회원 정보 삭제 */
	void deleteUser(int userId);
	
	/* L :: 로그인 */
	boolean loginUser(User user);
	
	
}
