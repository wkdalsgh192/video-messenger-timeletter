import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Tabs, Tab } from "@material-ui/core";

import bgImage from "pages/images/sky2.jpg";
import MyLetterItem from "./MyLetterItem";
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
const MyLetter = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    // console.log(newValue)
    setValue(newValue);
  };

  // 오픈여부에 따라 letter를 분류한다.
  const [openLetters, setOpenLetters] = useState([]);
  const [notOpenLetters, setNotOpenLetters] = useState([]);
//   const letterList = props.letterlist;
  useEffect(() => {
    console.log(props.letterList)
    if (props.letterList) {
        let tmpOpenLetters = [];
        let tmpNotOpenLetters = [];
        for (let i = 0; i < props.letterList.length; i++) {

            if (props.letterList[i].targets.length && props.letterList[i].private === false) {
                if (props.letterList[i].open === true) {
                    tmpOpenLetters.push(props.letterList[i]);
                } else {
                    tmpNotOpenLetters.push(props.letterList[i]);
                }
            }
        }
        setOpenLetters(tmpOpenLetters);
        setNotOpenLetters(tmpNotOpenLetters);
    }
  }, [props.letterList]);
  // console.log(openLetters,'오픈')
  // console.log(notOpenLetters,'비오픈')
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

      {/* 오픈, 비오픈 지도 전환 */}
      {/* {value === 0 ? <MapList letters={openLetters} /> : <MapList letters={notOpenLetters} />} */}

      {/* 오픈, 비오픈레터 전환 */}
      {value === 0
        ? openLetters.map((openLetter, index) => {
            return <MyLetterItem key={index} letter={openLetter} />;
          })
        : notOpenLetters.map((notOpenLetter, index) => {
            return <MyLetterItem key={index} letter={notOpenLetter} />;
          })}
    </Container>
  );
};

export default MyLetter;
