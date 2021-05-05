import React from "react";
import { Container } from "@material-ui/core";
import SearchModal from "../components/mainpage/SearchModal";
import img1 from './UserPage/images/종이비행기.gif'
import "./main.css"
// import img2 from './UserPage/images/우체통.jfif'
// import img3 from './UserPage/images/letter.gif'

function Main() {
  return (
    <Container className="main" maxWidth="xs" className="">
      <div className="first-section">
        웹서비스 설명
      </div>
      <div className="second-section">
        <img src={img1}></img>
        <SearchModal ></SearchModal>
      </div>
      <div className="third-section">
        사용법
      </div>
    </Container>
  );  
}

export default Main;
