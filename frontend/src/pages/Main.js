
import React, { useEffect, useState, useRef } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import Paper from "@material-ui/core/Paper";
// import InputBase from "@material-ui/core/InputBase";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";

import SearchBar from "../components/mainpage/SearchBar";
import img1 from "./UserPage/images/종이비행기.gif";

import { IoIosArrowDown } from "react-icons/all";
import { Link } from "react-router-dom";
import "./css/main.css";
import "./css/main.scss";
import Grid from "@material-ui/core/Grid";
import { BsPencil } from 'react-icons/bs'; 
import { HiOutlineBookOpen } from 'react-icons/hi';
import CountLetters from 'components/mainpage/CountLetters'
import Carousel from 'react-material-ui-carousel'
import main1 from 'static/images/main1.jpg'
import main2 from 'static/images/main2.jpg'
import main3 from 'static/images/main3.jpg'

const { logIn } = require("../_actions/user");
const userSlice = require("../_reducers/user");

function Main() {
  const scrolling = () => {
    window.scrollTo({ top: "1300", behavior: "smooth" });
    console.log("눌림");
  };

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
            <CountLetters />
            <div onClick={() => window.scrollTo({ top: "680", behavior: "smooth" })}>
              <button className="fill" style={{ width: "170px", height: "40px", borderRadius: "20px", paddingBottom: "10px", marginTop:"15px" }}>
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
          <SearchBar></SearchBar>
          <div className="child"></div>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <Grid item xs={5}>
              <Link to="/signup">
                <div style={{ color: "white", textAlign: "center", fontSize: "20px" }}>
                  <BsPencil />
                </div>
                <div style={{ color: "white", textAlign: "center", fontSize: "17px" }}>답장하기</div>
              </Link>
            </Grid>
            <div className="updown"></div>
            <Grid item xs={5}>
              <div style={{ color: "white", textAlign: "center", fontSize: "20px" }}>
                <HiOutlineBookOpen />
              </div>
              <div style={{ color: "white", textAlign: "center", fontSize: "17px" }} onClick={scrolling}>
                사이트 둘러보기
              </div>
            </Grid>
          </Grid>
        </div>

        {/* 세번째 메인 */}
        <div>
          <Carousel autoPlay={false} animation="slide" NextIcon PrevIcon>
            <div className="section section-3">사이트 이용 방법을 확인하시려면 좌우로 스와이프하세요<img src={img1}></img></div>
            <div><img src={main1} style={{width: '100%', height: '100vh'}} /></div>
            <div><img src={main2} style={{width: '100%', height: '100vh'}} /></div>
            <div><img src={main3} style={{width: '100%', height: '100vh'}} /></div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Main;
