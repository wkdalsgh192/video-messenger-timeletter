package com.caterpie.timeletter.model.request;

import lombok.Data;

@Data
public class LoginRequest {
	private String id;
	private String pw;
}
