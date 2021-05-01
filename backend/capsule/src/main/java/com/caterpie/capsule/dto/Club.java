package com.caterpie.capsule.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
//import javax.persistence.JoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;



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
	private int userId;
	
	
//	@JoinColumn
}
