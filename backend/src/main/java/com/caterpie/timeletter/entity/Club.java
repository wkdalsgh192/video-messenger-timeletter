package com.caterpie.timeletter.entity;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Club {

	@Id
	@Column(name = "club_id")
	private int clubId;
	@Column(length=10,nullable =false)
	private String clubName;
	private int userId;
	
//	@ManyToMany
//	@JoinTable(name = "club_member",
//			joinColumns = @JoinColumn(name = "club_id"),
//			inverseJoinColumns = @JoinColumn(name = "user_id"))
//	private List<User> users = new ArrayList<>();
	
//	@OneToOne(fetch=FetchType.LAZY)
//	@JoinColumn(name="club_id")
//	private User user;
	
	
	@Builder
	public Club(String clubName, int userId) {
		super();
		this.clubName = clubName;
		this.userId = userId;
	}
	
}
