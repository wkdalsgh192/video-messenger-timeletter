package io.capsule.user.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import io.capsule.user.dto.User;

@Mapper
public interface UserMapper {
	public int insertUser(User user) throws Exception;
}
