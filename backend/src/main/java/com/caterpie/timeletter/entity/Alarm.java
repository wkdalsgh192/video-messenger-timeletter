package com.caterpie.timeletter.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Alarm {
	@Id
	@Column(name = "user_id", columnDefinition = "INT")
	private int user_id;
	@Column(name = "letter_id", columnDefinition = "INT")
	private int letter_id;
	
	@Builder
	public Alarm(int userId, int letterId) {
		super();
		this.user_id = userId;
		this.letter_id = letterId;
	}
}
