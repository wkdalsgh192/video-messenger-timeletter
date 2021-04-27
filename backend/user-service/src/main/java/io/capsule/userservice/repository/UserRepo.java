package io.capsule.userservice.repository;

import org.springframework.data.repository.CrudRepository;

import io.capsule.userservice.dto.User;

public interface UserRepo extends CrudRepository<User, Integer> {

}
