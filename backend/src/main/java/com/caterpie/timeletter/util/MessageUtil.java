package com.caterpie.timeletter.util;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.HashMap;

import org.json.simple.JSONObject;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;

// 지정된 시간이 다 된 경우, 메시지 보내기
public class MessageUtil {

	public void sendSms(String phoneNumber, String letterCode) {

        String api_key = "Your api key";
        String api_secret = "Your secret token";
        Message coolsms = new Message(api_key, api_secret);
        HashMap<String, String> params = new HashMap<String, String>();

        params.put("to", phoneNumber);
        params.put("from", "Your verified phone number");
        params.put("type", "LMS");
        params.put("text", "[TimeLetter] 구미 5조 캐터피 님께서 보낸 타임레터가 도착하였습니다. 접속하기 >> http://timeletter.co.kr/letter/detail/"+letterCode);
        params.put("app_version", "test app 1.2");

        try {
            JSONObject obj = (JSONObject) coolsms.send(params);
            System.out.println(obj.toString());
        } catch (CoolsmsException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCode());
        }
    }
}
