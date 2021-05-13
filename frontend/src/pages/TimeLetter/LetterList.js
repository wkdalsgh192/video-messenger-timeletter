import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Tabs, 
  Tab,
  Link,
  // Card,
  // Grid,
  // CardContent,
  // Typography,
  Chip,
} from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import yellow from '@material-ui/core/colors/yellow';
import bgImage from 'pages/images/sky2.jpg'
// import closeletter from 'components/mypage/images/close.png'
import './css/letter.scss'
import './css/LetterList.css'


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

const yw = yellow[900]

// 컴포넌트
const LetterList = () => {
  const classes = useStyles()

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      {/* 오픈, 비오픈 구분 탭 */}
      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        style={{marginBottom:"15px", color:"bisque"}}
      >
        <Tab label="오픈된 레터" />
        <Tab label="비오픈된 레터" />
      </Tabs>

      {/* 레터 목록 */}
      <div className="trashnone">
        <div class="night2">
          <span class="moon"></span>
          <span class="spot1"></span>
          <span class="spot2"></span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Link to="/letter/detail">
            <div className="lettercontent2">
              <div style={{fontSize:"20px", color: '#fff'}}>레터 이름</div>
              <div style={{fontSize:"35px", color: '#fff'}}> 오픈시각 d-day</div>
              <div className="lettercontent" style={{marginTop:"10px", marginBottom:"10px"}}>
                <Chip variant="outlined" size="middle" icon={<FaceIcon />} label="From.조현섭" color={yw} />
              </div>
            </div>
          </Link>
        </div>          
      </div>

      {/* 레터 목록 */}
      {/* <Link to="/letter/detail">
        <Card className="">
          <Grid container alignItems="center" className="letterbox">
            <Grid item className="lettercontent">
              <CardContent>
                <Typography variant="subtitle1" color="textSecondary">
                  레터 이름
                </Typography>
                <Typography component="h5" variant="h5">
                  오픈시각 d-day
                </Typography>
              </CardContent>
            </Grid>
            <Grid item style={{marginRight:"15px"}} >
              <img src={closeletter} style={{ height: "70px", width: "70px" }} className="tossing" />
            </Grid>
            <Grid item className="lettercontent" style={{marginLeft:"10px", marginBottom:"10px"}}>
              <Chip variant="outlined" size="small" icon={<FaceIcon />} label="From.조현섭" color="secondary" />
            </Grid>
          </Grid>
        </Card>
      </Link> */}
    </Container>
  );
};

export default LetterList;