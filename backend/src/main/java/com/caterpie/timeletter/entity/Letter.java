package com.caterpie.timeletter.entity;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

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
	@Column(length=100,nullable=false)
	private String title;
	@Column(length=256,nullable=true)
	private String url;
	@Column(length=100,nullable=true)
	private String message;
	@Column(length=100,nullable=false)
	private String openDate;
	@Column(name="latitude",nullable=true)
	private BigDecimal latitude;
	@Column(name="longitude",nullable=true)
	private BigDecimal longitude;
	@Column(name="alert")
	private boolean alert;
	@Column(name="is_private")
	private boolean isPrivate;
	@JsonIgnore
	@Column(name="is_open")
	private boolean isOpen;
	
	@OneToMany(fetch=FetchType.LAZY)
	@JoinColumn(name="letterId")
	private List<Target> targets;
	
	
	@Builder
	public Letter(int letterId, int clubId, String title, String url, String message, String openDate, BigDecimal latitude,
			BigDecimal longitude, boolean alert, boolean isPrivate, boolean isOpen) {
		super();
		this.letterId = letterId;
		this.title = title;
		this.url = url;
		this.message = message;
		this.openDate = openDate;
		this.latitude = latitude;
		this.longitude = longitude;
//		this.toWhom = toWhom;
		this.alert = alert;
		this.isPrivate = isPrivate;
		this.isOpen = isOpen;
	}
	
	
	
	
	
	
	
	
}
