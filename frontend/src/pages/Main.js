// import React, { useCallback, useState } from "react";
import React, { useEffect, useState, useRef } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import Paper from "@material-ui/core/Paper";
// import InputBase from "@material-ui/core/InputBase";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";

import SearchModal from "../components/mainpage/SearchModal";
import img1 from "./UserPage/images/종이비행기.gif";

import { IoIosArrowDown } from "react-icons/all";
// import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import "./css/main.css";
import "./css/main.scss";
import { StopOutlined } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import { BsPencil } from 'react-icons/bs'; 
import { HiOutlineBookOpen } from 'react-icons/hi'; 



const { logIn } = require("../_actions/user");
const userSlice = require("../_reducers/user");

function Main() {
  const [num, setNum] = useState(333);
  const numRef = useRef(333);
  const scrolling = () => {
    window.scrollTo({ top: "1300", behavior: "smooth" });
    console.log("눌림");
  };

  useEffect(() => {
    setInterval(() => {
      setNum((numRef.current += 1));
    }, 1000);
  }, []);

  return (
    <div className="main-wrap">
      <div className="main-html carousel-wrapper ">
        <div className="section section-1">
           {/* 별똥별 */}
          <div className="night">
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
          </div>
          <div>
            <div style={{ color: "white", paddingTop: "250px", fontSize: "1.7rem", fontWeight: "bold" }}>실시간 생성된 타임 레터</div>
            <div style={{ color: "white", fontSize: "3rem" }}> ★ {num}</div>

            <div onClick={() => window.scrollTo({ top: "680", behavior: "smooth" })}>
              <button className="fill" style={{ width: "170px", height: "40px", borderRadius: "20px", paddingBottom: "10px", fontWeight: "bold" }}>
                레터 찾으러가기
              </button>
            </div>
          </div>

          <div className="arrowstyle" onClick={scrolling}>
            <div>사이트 이용법 보기</div>
            <IoIosArrowDown className="floating" />
          </div>
        </div>

        {/* 두번째 메인 */}

        <div className="section section-2">
          <div style={{ color: "white", fontSize:"30px" }}>기분 좋은,</div>
          <div style={{ color: "white" , fontSize:"30px", marginLeft:"70px" }}>설레임 <span style={{fontSize:"15px"}}>with timeletter</span></div>
          <SearchModal></SearchModal>
          <div className="child"></div>
          <Grid container  justify="center"
  alignItems="center" spacing={3}>
            <Grid item xs={5}>
              <Link to="/signup">
                <div style={{color: "white",textAlign:"center",fontSize:"20px"}}><BsPencil /></div>
                <div style={{ color: "white",textAlign:"center" ,fontSize:"17px"}}>답장하기</div>
              </Link>
            </Grid>
            <div className="updown"></div>
            <Grid item xs={5}>
              <div style={{color: "white",textAlign:"center",fontSize:"20px"}}><HiOutlineBookOpen /></div>
              <div style={{ color: "white",textAlign:"center",fontSize:"17px"}} onClick={scrolling}>
                사이트 둘러보기
              </div>
            </Grid>
          </Grid>
        </div>

        {/* 세번째 메인 */}

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
