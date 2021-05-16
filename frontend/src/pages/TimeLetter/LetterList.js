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
import { BASE_URL, TOKEN } from 'constants/index.js'
import axios from 'axios'


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
  // const [letterList, setLetterList] = useState([
  //   {'안세익' : {
  //       letterId: 1,
  //       userId: 1,
  //       title: 'title1',
  //       message: 'message1',
  //       file: '',
  //       private: true,
  //       openDate: '2021-05-14',
  //       latitude: 33.450705,
  //       longitude: 126.570677,
  //       open: true,
  //       letterCode: '12345qwert'
  //     }
  //   },
  //   {'안세익' : {
  //       letterId: 2,
  //       userId: 1,
  //       title: 'title2',
  //       message: 'message2',
  //       file: '',
  //       private: true,
  //       openDate: '2021-05-14',
  //       latitude: 33.450105,
  //       longitude: 126.570223,
  //       open: true,
  //       letterCode: '12345qwert'
  //     }
  //   },
  //   {'안세익': {
  //       letterId: 3,
  //       userId: 1,
  //       title: 'title3',
  //       message: 'message3',
  //       file: '',
  //       private: false,
  //       openDate: '2022-06-14',
  //       latitude: 33.450465,
  //       longitude: 126.570452,
  //       open: false,
  //       letterCode: '12345qwert'
  //     }
  //   },
  //   {'안세익': {
  //       letterId: 4,
  //       userId: 1,
  //       title: 'title4',
  //       message: 'message4',
  //       file: '',
  //       private: true,
  //       openDate: '2022-06-14',
  //       latitude: 33.450103,
  //       longitude: 126.570546,
  //       open: false,
  //       letterCode: '12345qwert'
  //     }
  //   }
  // ])

  // useEffect(() => {
  //   axios.get(BASE_URL + 'letter/retrieve', {
  //     headers: {
  //       Authorization: TOKEN
  //     }
  //   })
  //   .then(res => {
  //     console.log(res)
  //     setLetterList(res.data)
  //   })
  //   .catch(err => {
  //    console.log(err)
  //   }) 
  // }, [])

  // 오픈여부에 따라 letter를 분류한다.
  const [openLetters, setOpenLetters] = useState([])
  const [notOpenLetters, setNotOpenLetters] = useState([])

  useEffect(() => {
    axios.get(BASE_URL + 'letter/retrieve', {
      headers: {
        Authorization: TOKEN
      }
    })
    .then(res => {
      console.log(res)
      const letterList = res.data
      let tmpOpenLetters = []
      let tmpNotOpenLetters = []
      console.log(letterList.length)
      for (const [key, value] of Object.entries(letterList)) {
        // console.log(key)
        // console.log(value)
        if (value.open === true) {
          tmpOpenLetters.push({name: key, letter: value})
          // console.log(letterList[i][key])
        } else if (value.private === false) {
          tmpNotOpenLetters.push({name: key, letter: value})
        }
      }
      setOpenLetters(tmpOpenLetters)
      setNotOpenLetters(tmpNotOpenLetters)
    })
    .catch(err => {
     console.log(err)
    })
  }, [])


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
          return <LetterListItem key={index} item={openLetter} /> 
        })
        : notOpenLetters.map((notOpenLetter, index) => {
          return <LetterListItem key={index} item={notOpenLetter} />
        }) 
      }
    </Container>
  );
};

export default LetterList;