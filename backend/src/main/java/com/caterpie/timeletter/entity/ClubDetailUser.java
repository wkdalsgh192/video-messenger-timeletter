package com.caterpie.timeletter.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class ClubDetailUser {
	@Id
	private int userId;
	private String name;
}
