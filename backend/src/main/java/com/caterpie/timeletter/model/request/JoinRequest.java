package com.caterpie.timeletter.model.request;

import lombok.Data;

@Data
public class JoinRequest {
	private String email;
	private String password;
	private String name;
	private String phone;
}