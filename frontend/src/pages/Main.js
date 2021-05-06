// import React, { useCallback, useState } from "react";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// import Paper from "@material-ui/core/Paper";
// import InputBase from "@material-ui/core/InputBase";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
import { Container } from "@material-ui/core";
import SearchModal from "../components/mainpage/SearchModal";
import img1 from "./UserPage/images/종이비행기.gif";
// import img2 from "./UserPage/images/우체통.jfif";
// import img3 from "./UserPage/images/letter.gif";
// import {FaArrowDown} from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/all";
// import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import "./css/main.css";
const { logIn } = require("../_actions/user");
const userSlice = require("../_reducers/user");

function Main() {
  const scrolling = () => {
    window.scrollTo({top:"1300",behavior:"smooth"});
    console.log('눌림')

  }
  return (
    <div className="main-wrap">
      <div className="main-html">
        <div className="section section-1">
          <div>
            <Link to="/login"><div style={{color:"white", paddingTop:"200px", fontSize:"3rem"}}>로그인하러가기</div></Link>
            <div style={{color:"white", fontSize:"3rem"}} onClick={()=>window.scrollTo({top:"680",behavior:"smooth"})}>캡슐 찾으러가기</div>
          </div>
          
          <div className="arrowstyle" onClick={scrolling}>
            <div>사이트 이용법 보기</div>
            <IoIosArrowDown className="floating" />
          </div>
        </div>
        
        <div className="section section-2">
          <SearchModal></SearchModal>
          <div className="child"></div>
        </div>

        <div className="section section-3">
          서비스 설명 페이지
          <img src={img1}></img>
        </div>
        {/* <img src={img2}></img> */}
      </div>
    </div>
  );
}

export default Main;
