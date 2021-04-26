package io.capsule.userservice.dto;

import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {

	@ApiParam(value= "User No", required=false)
	private int uId;
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
