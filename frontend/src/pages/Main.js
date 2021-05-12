// import React, { useCallback, useState } from "react";
import React,{useEffect, useState, useRef} from "react";
import useSound from 'use-sound';
// import { useDispatch, useSelector } from "react-redux";

// import Paper from "@material-ui/core/Paper";
// import InputBase from "@material-ui/core/InputBase";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
import { Container } from "@material-ui/core";
import SearchModal from "../components/mainpage/SearchModal";
import img1 from "./UserPage/images/종이비행기.gif";
import sound1 from "./sounds/음악1.mp3"
import { IoIosArrowDown } from "react-icons/all";
// import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import "./css/main.css";
import "./css/main.scss";

const { logIn } = require("../_actions/user");
const userSlice = require("../_reducers/user");


function Main() {
  const [play] = useSound(sound1);
  const [num, setNum] = useState(333);
  const numRef = useRef(333);
  const scrolling = () => {
    window.scrollTo({ top: "1300", behavior: "smooth" });
    console.log("눌림");
  };

  useEffect(()=>{
    setInterval(()=>{
      setNum((numRef.current += 1));
    },1000);
  },[]);
  
  
  return (
    <div className="main-wrap">
      <div className="main-html">
        <div className="section section-1">
       
          <div className="night">
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
          </div>
          <div>
            
            <div style={{ color: "white", paddingTop: "250px", fontSize: "1.7rem", fontWeight:"bold" }}>실시간 생성된 타임 레터</div>
            <div style={{ color: "white", fontSize: "3rem" }}> ★ {num}</div>
            
            <div onClick={() => window.scrollTo({ top: "680", behavior: "smooth" })}>
            <button class="fill" style={{width:"170px",height:"40px",borderRadius:"20px",paddingBottom:"10px",fontWeight:"bold"}}>레터 찾으러가기</button>
            </div>
            <div>
            <button onClick={play}>음악재생test</button>
            </div>
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
