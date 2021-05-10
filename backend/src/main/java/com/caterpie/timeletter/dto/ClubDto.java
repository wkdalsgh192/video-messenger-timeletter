package com.caterpie.timeletter.dto;

import java.util.List;

import com.caterpie.timeletter.entity.User;

import lombok.Data;

@Data
public class ClubDto {
	private String clubName;
	private int masterId;	//클럽장
	private List<Integer> membersId;	//클럽창설시 초기 멤버들 id
	private String profile;
	private String desc;
}
