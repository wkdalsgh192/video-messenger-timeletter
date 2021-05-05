package com.caterpie.timeletter.dto;


import java.util.Collection;
import java.util.List;
import com.caterpie.timeletter.dto.User;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;



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
