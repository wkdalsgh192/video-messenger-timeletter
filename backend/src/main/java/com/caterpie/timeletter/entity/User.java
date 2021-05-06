package com.caterpie.timeletter.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import com.caterpie.timeletter.dto.Club;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class User {
	
	@Id
	@Column(name="user_id")
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
	
	@JsonIgnore
	@Column(name="activated")
	private boolean activated;
	
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	private Club club;
	
	@ManyToMany
	@JoinTable(
			name="user_authority",
			joinColumns = {@JoinColumn(name= "user_id", referencedColumnName= "user_id")},
			inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
	private Set<Authority> authorities;
	
	
	@Builder
	public User( String email, String name, String password, String phone, String salt) {
		this.email = email;
		this.name = name;
		this.password = password;
		this.phone = phone;
		this.salt = salt;
	}	
}

