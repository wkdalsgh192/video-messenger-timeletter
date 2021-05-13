import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import './UpperBar.css'
import { TOKEN } from '../../constants';
import ReactAudioPlayer from "react-audio-player";
import sound1 from "pages/sounds/음악1.mp3";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function UpperBar() {
  const classes = useStyles()
  const history = useHistory()

  // 로그인 여부를 확인하기 위한 state
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {  
    if (TOKEN) {
      setIsLogin(true)
    }
  }, [])

  // 로그인한 유저일 경우 보여줄 상단바
  const userBar = (
    <div>
      <IconButton color="inherit" aria-label="notification" onClick={() => alert('알림')}>
        <Badge badgeContent={10} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton color="inherit" aria-label="mypage" onClick={() => history.push('/mypage')}>
        <AccountCircle />
      </IconButton>
      <Button color="inherit" onClick={() => {setIsLogin(false); window.localStorage.clear(); window.location.replace("/")}}>
        로그아웃
      </Button>
    </div>
  )

  // 로그인하지 않은 게스트일 경우 보여줄 상단바
  const guestBar = (
    <div>
      <Button color="inherit" onClick={() => history.push('/login')}>
        로그인
      </Button>
      {/* <ReactAudioPlayer src={sound1} autoPlay controls /> */}
    </div>
  )

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap onClick={() => history.push('/')}>
          TimeLetter
        </Typography>
        <div>
          {isLogin ? userBar : guestBar}
        </div>
      </Toolbar>
    </AppBar>
  )
}