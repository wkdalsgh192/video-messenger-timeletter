package io.capsule.userservice.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import io.capsule.userservice.dto.User;

@Mapper
public interface UserMapper {
	public int insertUser(User user) throws Exception;
}
