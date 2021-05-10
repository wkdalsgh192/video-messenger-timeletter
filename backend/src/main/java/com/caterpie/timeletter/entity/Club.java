package com.caterpie.timeletter.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Club {

	@Id
	private int clubId;
	@Column(length=10,nullable =false)
	private String clubName;
	private int userId;
	
	
	@Builder
	public Club(String clubName, int userId) {
		super();
		this.clubName = clubName;
		this.userId = userId;
	}
	
	
	
}
