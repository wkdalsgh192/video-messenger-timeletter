package io.capsule.user.service;

import io.capsule.user.dto.User;

public interface UserService {
	/* C :: 회원 가입 */
	boolean insertUser(User user) throws Exception;
	
	/* R :: 회원 정보 가져오기 */
	
	/* U :: 회원 가입 수정 */
	boolean updateUser(User user) throws Exception;
	
	/* D :: 회원 정보 삭제 */
	boolean deleteUser(String email) throws Exception;
	
	/* L :: 로그인 */
	boolean loginUser(User user) throws Exception;
	
	
}
