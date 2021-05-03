package com.caterpie.timeletter.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
public class User {
	
	@Id
	private int userId;
	@Column(length=45,nullable =false)
	private String email;
	@Column(length=20,nullable =false)
	private String name;
	@Column(length=256,nullable =false)
	private String profile;
	@Column(length=64,nullable =false)
	private String password;
	@Column(length=20,nullable =false)
	private String phone;
	private String salt;
		
}

