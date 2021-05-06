package com.caterpie.timeletter.model.request;

import lombok.Data;

@Data
public class UserModifyRequest {
	private int userId;
	private String email;
	private String password;
	private String name;
	private String phone;
}
