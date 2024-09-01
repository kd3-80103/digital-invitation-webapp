package com.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.userservice.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

	public UserEntity findByEmail(String username);
}

