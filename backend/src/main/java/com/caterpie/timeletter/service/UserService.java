package com.caterpie.timeletter.service;

import com.caterpie.timeletter.dto.User;
import com.caterpie.timeletter.model.request.JoinRequest;
import com.caterpie.timeletter.model.request.LoginRequest;
import com.caterpie.timeletter.model.request.UserModifyRequest;

public interface UserService {
	/* C :: 회원 가입 */
	void insertUser(JoinRequest joinReq);
	
	/* R :: 회원 정보 가져오기 */
	
	/* U :: 회원 가입 수정 */
	void updateUser(UserModifyRequest modReq);
	
	/* D :: 회원 정보 삭제 */
	void deleteUser(int userId);
	
	/* L :: 로그인 */
	int loginUser(LoginRequest loginReq);
	
	
}
