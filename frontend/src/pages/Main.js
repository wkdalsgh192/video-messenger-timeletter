import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Container } from "@material-ui/core";
import SearchModal from "../components/mainpage/SearchModal";

const { logIn } = require("../_actions/user");
const userSlice = require("../_reducers/user");

function Main() {
  return (
    <div>
      <Container maxWidth="xs" className="" >
        <SearchModal ></SearchModal>
      </Container>
    </div>
  );
}

export default Main;

// const user = useSelector((state) => state.user);
// const { list } = useSelector((state) => state.post);
// const dispatch = useDispatch();

// const onClick = useCallback(() => {
//   dispatch(
//     logIn({
//       id: "zerocho",
//       password: "비밀번호",
//     })
//   );
//   // dispatch(logIn());
// }, []);

// const onLogout = useCallback(() => {
//   dispatch(userSlice.actions.logOut());
// }, []);

{
  /* {user.isLoggingIn ? (
      <div>로그인 중</div>
    ) : user.data ? (
      <div>{user.data.nickname}</div>
    ) : (
      "로그인 해주세요."
    )}
    {!user.data ? (
      <button onClick={onClick}>로그인</button>
    ) : (
      <button onClick={onLogout}>로그아웃</button>
    )} */
}
