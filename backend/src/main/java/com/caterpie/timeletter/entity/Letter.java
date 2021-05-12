package com.caterpie.timeletter.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Letter {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "letter_id", columnDefinition = "INT UNSIGNED")
	private int letterId;
//	@Column(name="club_id")
//	private int clubId;
	@Column(length=100,nullable=false)
	private String title;
	@Column(length=256,nullable=true)
	private String url;
	@Column(length=100,nullable=true)
	private String message;
	@Column(length=100,nullable=false)
	private String openDate;
	@Column(name="lat",nullable=true)
	private BigDecimal latitude;
	@Column(name="lng",nullable=true)
	private BigDecimal longitude;
	@Column(length=100,nullable=false)
	private boolean alert;
	@Column(length=100,nullable=false)
	private boolean isPrivate;
	@JsonIgnore
	private boolean isOpen;
	
	@Builder
	public Letter(int letterId, int clubId, String title, String url, String message, String openDate, BigDecimal latitude,
			BigDecimal longitude, boolean alert, boolean isPrivate, boolean isOpen) {
		super();
		this.letterId = letterId;
//		this.clubId = clubId;
		this.title = title;
		this.url = url;
		this.message = message;
		this.openDate = openDate;
		this.latitude = latitude;
		this.longitude = longitude;
		this.alert = alert;
		this.isPrivate = isPrivate;
		this.isOpen = isOpen;
	}
	
	
	
	
	
	
	
	
}
