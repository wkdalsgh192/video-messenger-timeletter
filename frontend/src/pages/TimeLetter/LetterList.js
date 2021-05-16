import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Tabs, 
  Tab,
} from '@material-ui/core'

import bgImage from 'pages/images/sky2.jpg'
import LetterListItem from 'components/timeletter/LetterListItem'
import { FaBullseye } from 'react-icons/fa'
// import MapList from "components/timeletter/MapList"


// 스타일
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${bgImage})`,
    height: '100%',
    width: '100%',
    paddingTop: '70px',
    paddingBottom: '700px',
    color: '#ffcc80'
  },
}))



// 컴포넌트
const LetterList = () => {
  const classes = useStyles()

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    // console.log(newValue)
    setValue(newValue);
  };

  // axios요청을 통해 letterList를 받는다.
  // API 구현 전이므로 더미 데이터로 대체한다.
  const [letterList, setLetterList] = useState([
    {'안세익' : {
        letterId: 1,
        userId: 1,
        title: 'title1',
        message: 'message1',
        file: '',
        private: true,
        openDate: '2021-05-14',
        latitude: 33.450705,
        longitude: 126.570677,
        isOpen: true,
      }
    },
    {'안세익' : {
        letterId: 2,
        userId: 1,
        title: 'title2',
        message: 'message2',
        file: '',
        private: true,
        openDate: '2021-05-14',
        latitude: 33.450105,
        longitude: 126.570223,
        isOpen: true,
      }
    },
    {'안세익': {
        letterId: 3,
        userId: 1,
        title: 'title3',
        message: 'message3',
        file: '',
        private: false,
        openDate: '2022-06-14',
        latitude: 33.450465,
        longitude: 126.570452,
        isOpen: false,
      }
    },
    {'안세익': {
        letterId: 4,
        userId: 1,
        title: 'title4',
        message: 'message4',
        file: '',
        private: true,
        openDate: '2022-06-14',
        latitude: 33.450103,
        longitude: 126.570546,
        isOpen: false,
      }
    }
  ])

  // 오픈여부에 따라 letter를 분류한다.
  const [openLetters, setOpenLetters] = useState([])
  const [notOpenLetters, setNotOpenLetters] = useState([])

  useEffect(() => {
    let tmpOpenLetters = []
    let tmpNotOpenLetters = []
    for (let i = 0; i < letterList.length; i++) {
      for (const key of Object.keys(letterList[i])) {
        if (letterList[i][key].isOpen === true) {
          tmpOpenLetters.push(letterList[i])
          // console.log(letterList[i][key])
        } else if (letterList[i][key].private === false) {
          tmpNotOpenLetters.push(letterList[i])
        }
      }
    }
    setOpenLetters(tmpOpenLetters)
    setNotOpenLetters(tmpNotOpenLetters)
  }, [letterList])


  return (
    <Container className={classes.container} maxWidth="xs">
      {/* 오픈, 비오픈 구분 탭 */}
      <Tabs
        value={value}
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="tabs"
        style={{marginBottom:"15px", color:"bisque"}}
      >
        <Tab label="오픈된 레터" />
        <Tab label="비오픈된 레터" />
      </Tabs>

      {/* 오픈, 비오픈 지도 전환 */}
      {/* {value === 0 ? <MapList letters={openLetters} /> : <MapList letters={notOpenLetters} />} */}

      {/* 오픈, 비오픈레터 전환 */}
      {value === 0
        ? openLetters.map((openLetter, index) => {
          return <LetterListItem key={index} letter={openLetter} /> 
        })
        : notOpenLetters.map((notOpenLetter, index) => {
          return <LetterListItem key={index} letter={notOpenLetter} />
        }) 
      }
    </Container>
  );
};

export default LetterList;