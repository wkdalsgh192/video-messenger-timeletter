package com.caterpie.timeletter.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/tt")
@CrossOrigin("*")
public class TestCont {

	@GetMapping
	public List<Map<String, Object>> list() {
		System.out.println("aaaaaa");
		return null;
	}

}


