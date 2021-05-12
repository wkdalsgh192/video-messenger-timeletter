package com.caterpie.timeletter.controller;

import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.caterpie.timeletter.dto.ClubDetailDto;
import com.caterpie.timeletter.dto.ClubDto;
import com.caterpie.timeletter.dto.ClubJoinDto;
import com.caterpie.timeletter.entity.Club;
import com.caterpie.timeletter.entity.ClubList;
import com.caterpie.timeletter.repository.ClubRepository;
import com.caterpie.timeletter.service.ClubService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/club")
public class ClubController {
	static final Logger logger = LoggerFactory.getLogger(ClubController.class);
	@Autowired
	private ClubRepository clubRepository;
	@Autowired
	ClubService service;
	
	
	@Transactional()
	@PostMapping(path="/insert")
	@ApiOperation(value = "클럽생성하기", notes = "클럽생성")
	public ResponseEntity<?> insertClub(@RequestBody ClubDto clubReq) {
		try {
			service.insertClub(clubReq);	//클럽생성
			
			Club newClub = clubRepository.findByClubName(clubReq.getClubName());	//생성된 클럽
			service.joinClub(clubReq.getMasterId(), newClub.getClubId() );	//마스터 클럽가입
			
			int memLen = clubReq.getMembersId().size();
			for(int i=0; i<memLen; i++) {	//멤버수만큼 클럽가입
				service.joinClub(clubReq.getMembersId().get(i), newClub.getClubId());
			}
		}catch (Exception e) {
			return new ResponseEntity<String>("fail",HttpStatus.BAD_REQUEST);		
		}
		return new ResponseEntity<String>("OK",HttpStatus.CREATED);
	}
	
	@GetMapping("/findAll")
	@ApiOperation(value = "전체 클럽조회", notes = "클럽조회")
	public List<Club> findAll() {
		return clubRepository.findAll();
	}
	
	@GetMapping("/findByName")
	@ApiOperation(value = "이름에 해당되는 클럽찾기", notes = "name으로 클럽조회")
	public Club findByName(@RequestParam String name) {
		return clubRepository.findByClubName(name);
	}
	
	@DeleteMapping("/delClub")
	@ApiOperation(value = "club_id로 삭제", response = String.class)
	public ResponseEntity<?> delpost(@RequestParam("id") int clubId) {
		try {
			clubRepository.delAllMember(clubId);	//club_member테이블에서 club_id로 삭제
			clubRepository.deleteById(clubId);		//club테이블에서 club_id로 삭제
        }catch (Exception e) {
        	return new ResponseEntity<String>("fail",HttpStatus.BAD_REQUEST);
		}   	
    	return new ResponseEntity<String>("success",HttpStatus.OK);
	}
	
	@PostMapping(path="/join")
	@ApiOperation(value = "클럽가입(초대)하기", notes = "가입 클럽하기")
	public ResponseEntity<?> insertClub(@RequestBody ClubJoinDto joinReq) {
		try {
			service.joinClub(joinReq.getUserId(), joinReq.getClubId());
		}catch (Exception e) {
			return new ResponseEntity<String>("fail",HttpStatus.BAD_REQUEST);		
		}
		return new ResponseEntity<String>("OK",HttpStatus.CREATED);
	}
	
	
	@GetMapping("/findMyClub")
	@ApiOperation(value = "user_id로 가입된 클럽 찾기", notes = "가입된 클럽조회")
	public List<Club> findByUserId(@RequestParam("id") int userId) {
		List<Integer> clubList = clubRepository.findMyClub(userId);
		return clubRepository.findByClubIdIn(clubList);
	}
	
	
	@GetMapping("/findClubList")
	@ApiOperation(value = "클럽 리스트 보기", notes = "클럽리스트페이지에서 사용될 API")
	public List<Map<ClubList, Object>> findClubList() {
		return clubRepository.findClubList();
	}
	
	@GetMapping("/findDetail")
	@ApiOperation(value = "club_id로 클럽 디테일 정보 조회", notes = "클럽 디테일 페이지에서 사용될 API")
	public ClubDetailDto findClubDetail(@RequestParam("id") int clubId) {
		return service.findClubDetail(clubId);
	}
}
