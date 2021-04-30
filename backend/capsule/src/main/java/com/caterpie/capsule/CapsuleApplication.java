package com.caterpie.capsule;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class CapsuleApplication {

	public static void main(String[] args) {
		SpringApplication.run(CapsuleApplication.class, args);
	}

}
