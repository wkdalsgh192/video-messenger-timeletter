// 마이페이지
export { default as Main } from "./Main";

// 회원 페이지 (로그인, 회원가입, 마이페이지)
export { default as Signup } from "./UserPage/Signup";
export { default as Login } from "./UserPage/Login";
export { default as Mypage } from "./UserPage/Mypage";
export { default as UserUpdate } from "./UserPage/UserUpdate";

// 타임레터 페이지 (타임레터 생성, 타임레터 조회, 타임레터 상세페이지)
export { default as LetterCreate } from "./TimeLetter/LetterCreate";
export { default as LetterList } from "./TimeLetter/LetterList";
export { default as LetterDetail } from "./TimeLetter/LetterDetail";

// 그룹 페이지 (그룹 리스트, 그룹 생성, 그룹 디테일)
export { default as GroupList } from "./Group/GroupList";
export { default as GroupCreate} from "./Group/GroupCreate";
export { default as GroupDetail} from "./Group/GroupDetail";

// 낫파운드
export { default as NotFound } from "./NotFound";
