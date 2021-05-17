package com.caterpie.timeletter.dto;

import java.util.List;
import java.util.Map;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ClubLetterDto {
	private int userId;
	private String userName;
	private int clubId;
	private String url;
	private String title;
	private String message;
	private String openDate;
	private String latitude;
	private String longitude;
	private boolean isPrivate;
	private boolean isOpen;
	private String letterCode;
}
