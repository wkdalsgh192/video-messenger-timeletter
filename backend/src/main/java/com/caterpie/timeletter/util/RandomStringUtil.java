package com.caterpie.timeletter.util;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Random;

public class RandomStringUtil {

	private final int LEFT_LIMIT = 48;
	private final int RIGHT_LIMIT = 122;
	private final int STRING_LENGTH = 10;
	
	public String rand() {
		Random random = new Random();
		
		StringBuilder res = random.ints(LEFT_LIMIT,RIGHT_LIMIT+1) // 해당 범위 내 int를 계속 보낸다.
				.filter(i -> (i<=57 || i>=65) && (i<=90||i>=97)) // a-z, A-Z 범위 안에 있는 값만 거른다.
				.limit(STRING_LENGTH) // 주어진 길이만큼만 받는다
				.collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append); 
				// StringBuilder를 생성해서 캐릭터로 변환해 집어넣는다. => 왜 append가 필요한지는 추가 조사 필요.
		
		SimpleDateFormat sdf = new SimpleDateFormat("MMddhhmmss");
		String time = sdf.format(new Timestamp(System.currentTimeMillis()));
		
		StringBuilder sb = new StringBuilder().append(time);
		for (int i=0;i<time.length();++i) {
			if (i%2==0) sb.setCharAt(i, res.charAt(i));
		}
		
		
		return sb.toString();
	}
	
//	public static void main(String[] args) {
//		System.out.println(new RandomUtil().rand());
//	}
	
}
