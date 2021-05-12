package com.caterpie.timeletter.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
/*
 * 그룹 리스트 페이지에서 사용될 Dto
 */
@Entity
@Data
@NoArgsConstructor
public class ClubListDto {
	@Id
	@Column(name = "club_id")
	private int clubId;
	@Column(length=10,nullable =false)
	private String clubName;
	@Column(length=100)
	private String clubProfile;
	@Column(length=256)
	private String clubDesc;
	private int userId;
	private int members;
	
}

