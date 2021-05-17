import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Tabs, Tab } from "@material-ui/core";
import axios from 'axios';

import bgImage from "pages/images/sky2.jpg";
import GroupLetterItem from "./GroupLetterItem";
import { BASE_URL,TOKEN } from "../../constants";
import { useParams } from "react-router";
// import MapList from "components/timeletter/MapList"
// 스타일
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${bgImage})`,
    height: "100%",
    width: "100%",
    paddingTop: "70px",
    paddingBottom: "700px",
    color: "#ffcc80",
  },
}));
// 컴포넌트
const GroupLetter = () => {
  const classes = useStyles();
  const {id} = useParams();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    // console.log(newValue)
    setValue(newValue);
  };
  // 오픈여부에 따라 letter를 분류한다.
  const [openLetters, setOpenLetters] = useState([]);
  const [notOpenLetters, setNotOpenLetters] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL+"club/findLetters?id="+id,{Authorization:TOKEN})
    .then((res)=> {
      console.log(res.data,'letter')
      setOpenLetters(res.data.openedLetter);
      setNotOpenLetters(res.data.closedLetter);
    })
  }, []);

  return (
    <Container className={classes.container} maxWidth="xs">
      {/* 오픈, 비오픈 구분 탭 */}
      <Tabs
        value={value}
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="tabs"
        style={{ marginBottom: "15px", color: "bisque" }}
      >
        <Tab label="오픈된 레터" />
        <Tab label="비오픈된 레터" />
      </Tabs>
      {value === 0
        ? openLetters.map((openLetter, index) => {
            return <GroupLetterItem key={index} letter={openLetter} />;
          })
        : notOpenLetters.map((notOpenLetter, index) => {
            return <GroupLetterItem key={index} letter={notOpenLetter} />;
          })}
    </Container>
  );
};

export default GroupLetter;
