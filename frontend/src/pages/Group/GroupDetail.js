import React,{useState} from "react";
import './GroupDetail.css';
import GroupCapsule from '../../components/group/GroupCapsule';
import GroupMember from '../../components/group/GroupMember';
import { Container, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LetterCardlist from "../../components/mypage/LetterCardlist";

import './GroupDetail.css';
import './GroupList.css';

function GroupDetail() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  let letterform = null;

  if (value===0) {
    letterform = (
      <div className="trashnone">
        <LetterCardlist></LetterCardlist>
      </div>
    )
  }
  else {
    letterform = (
    <div className="trashnone">

    <LetterCardlist></LetterCardlist>
  </div>
    )
  }

  return (
    <Container className="GroupDetail" style={{color:"white"}} className="grouplist">
      <div>
        <div className="GroupMember fill">
          <Typography className="GroupMember-title">/그룹이름/</Typography>
          {/* <button onClick={()=>alert('멤버관리')} style={{borderRadius:"20px"}}>멤버관리</button>
          <button onClick={()=>alert('그룹삭제')} style={{borderRadius:"20px"}}>그룹삭제</button> */}
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:"white"}}>
        그룹설정
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>멤버추가</MenuItem>
        <MenuItem onClick={handleClose}>그룹삭제</MenuItem>
      </Menu>

        </div>
        <GroupMember></GroupMember>

      </div>
  
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
  {letterform}
{/* 
      <div>
        <Typography>오픈된 캡슐</Typography>
        <GroupCapsule></GroupCapsule>
      </div>
      <div>
        <Typography>비오픈 캡슐</Typography>
        <GroupCapsule></GroupCapsule>
      </div> */}
    </Container>
  );
}

export default GroupDetail;
