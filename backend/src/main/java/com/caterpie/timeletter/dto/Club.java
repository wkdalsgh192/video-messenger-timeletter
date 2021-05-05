package com.caterpie.timeletter.dto;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;



//import io.swagger.annotations.ApiParam;
import lombok.Data;

@Entity
@Data
public class Club {

	//@ApiParam(value= "Master No", required=true)
	@Id
	private int clubId;
	@Column(length=10,nullable =false)
	private String clubName;
	private int user_id;
	

	
	
}
