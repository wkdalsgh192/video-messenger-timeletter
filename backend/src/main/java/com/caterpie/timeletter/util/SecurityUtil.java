package com.caterpie.timeletter.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public class SecurityUtil {

   private static final Logger logger = LoggerFactory.getLogger(SecurityUtil.class);

   private SecurityUtil() {
   }

   public static Optional<String> getCurrentUsername() {
        // Security Context에서 Authentication 정보 가져오기
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    
        // 인증 정보가 아무 것도 없는 경우 리턴
        if (authentication == null) {
            logger.debug("Security Context에 인증 정보가 없습니다.");
            return Optional.empty();
        }


        String username = null;
        // 인증 객체에 있는 principal이 UserDetails 인스턴스 형태인 경우
        if (authentication.getPrincipal() instanceof UserDetails) {
            // UserDetails 엔티티 형태로 가져오기
            UserDetails springSecurityUser = (UserDetails) authentication.getPrincipal();
            // 그 중 유저 이름 가져오기
            username = springSecurityUser.getUsername();
        // 스트링 형태인 경우
        } else if (authentication.getPrincipal() instanceof String) {
            username = (String) authentication.getPrincipal();
        }

        // 반환
        return Optional.ofNullable(username);
   }
}