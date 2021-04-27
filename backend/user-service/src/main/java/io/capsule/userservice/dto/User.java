package io.capsule.userservice.dto;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {

	@Id
	@ApiParam(value= "User No", required=false)
	private int uid;
	@ApiParam(value= "User Email", required=true)
	private String email;
	@ApiParam(value= "User Password", required=true)
	private String password;
	@ApiParam(value= "User Name", required=true)
	private String name;
	@ApiParam(value= "User Phone Number", required=true)
	private String phone;
	@ApiParam(value= "User Salt", required=true)
	private String salt;
		
}
