import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Container,
  Typography,
  // Box,
  Grid,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  // InputLabel,
  Input,
  InputAdornment,
  ButtonGroup,
} from '@material-ui/core';
import TitleRoundedIcon from '@material-ui/icons/TitleRounded';

// 스타일
const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '16px',
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e8eaf6',
    padding: theme.spacing(0, 2),
    paddingBottom: theme.spacing(10),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  field: {
    marginBottom: '24px',
    width: '100%'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}))

// 컴포넌트
const LetterCreate = () => {
  const classes = useStyles()
  const [capsuleName, setCapsuleName] = useState('')
  // console.log(capsuleName)

  const [isPublic, setIsPublic] = useState('1')
  // console.log(isPublic)
  // 1은 공개, 0은 비공개
  
  const getToday = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  }

  const [openDate, setOpenDate] = useState(getToday())
  // console.log(openDate)

  const [alarmDate, setAlarmDate] = useState('0')
  // 0은 일주일 전, 1은 한달 전
  // console.log(alarmDate)

  const [target, setTarget] = useState('0')
  // 0은 나에게, 1은 타인에게, 2는 그룹에게
  console.log(target)

  return (
    <Container maxWidth="xs">
      <Typography className={classes.title} variant="h6">캡슐생성</Typography>
      {/* 캡슐 정보 */}
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container direction="column">

            {/* 캡슐 이름 */}
            <Grid item>
              <FormControl className={classes.field}>
                <FormLabel>캡슐이름</FormLabel>
                <Input
                  onChange={(e) => setCapsuleName(e.target.value)}
                  id="capsule-name"
                  placeholder="이름을 입력해주세요"
                  fullWidth
                  required
                  autoFocus
                  startAdornment={
                    <InputAdornment position="start">
                      <TitleRoundedIcon />
                    </InputAdornment>
                  }
                  style={{marginTop: '4px'}}
                />
              </FormControl>
            </Grid>

            {/* 파일 업로드 */}
            <Grid item>
              <FormControl className={classes.field}>
                <FormLabel>업로드</FormLabel>
                <Input
                  type="file"
                  id="upload-file"
                  required
                  variant="outlined"
                  style={{marginTop: '4px'}}
                />
              </FormControl>
            </Grid>
            
            {/* 비공개설정 */}
            <Grid item>
              <FormControl className={classes.field}>
                <FormLabel>공개여부</FormLabel>
                <RadioGroup value={isPublic} onChange={(e) => setIsPublic(e.target.value)}>
                  <Grid container spacing={2}>
                    <Grid item><FormControlLabel value="1" control={<Radio />} label="공개" /></Grid>
                    <Grid item><FormControlLabel value="0" control={<Radio />} label="비공개" /></Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* 오픈조건 설정 */}
            <Grid item>
              <FormControl>
                <FormLabel>오픈조건</FormLabel>
                <TextField
                  onChange={(e) => setOpenDate(e.target.value)}
                  id="date"
                  type="date"
                  defaultValue={openDate}
                  className={classes.field}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            {/* 알림 설정 */}
            <Grid item>
              <FormControl className={classes.field}>
                <FormLabel>알림설정</FormLabel>
                <RadioGroup value={alarmDate} onChange={(e) => setAlarmDate(e.target.value)}>
                  <Grid container spacing={2}>
                    <Grid item><FormControlLabel value="0" control={<Radio />} label="일주일 전" /></Grid>
                    <Grid item><FormControlLabel value="1" control={<Radio />} label="한달 전" /></Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* 수신대상 */}
            <FormControl className={classes.field}>
              <FormLabel>수신대상</FormLabel>
              <ButtonGroup variant="outlined" color="primary" fullWidth style={{marginTop: '8px'}}>
                <Button onClick={(e) => setTarget('0')}>나에게</Button>
                <Button onClick={(e) => setTarget('1')}>타인에게</Button>
                <Button onClick={(e) => setTarget('2')}>그룹에게</Button>
              </ButtonGroup>
            </FormControl>
            
            {/* submit */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              캡슐 생성
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LetterCreate;