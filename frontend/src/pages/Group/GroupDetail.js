import React,{useState} from "react";
import './GroupDetail.css';
import GroupCapsule from '../../components/group/GroupCapsule';
import GroupMember from '../../components/group/GroupMember';
import { Container, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LetterCardlist from "../../components/mypage/LetterCardlist";

import './GroupDetail.css';

function GroupDetail() {
  const [value, setValue] = useState(0);

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

    <Container className="GroupDetail">
      <div>
        <div className="GroupMember">
          <Typography className="GroupMember-title">/그룹이름/</Typography>
          <button onClick={()=>alert('멤버관리')}>멤버관리</button>
          <button onClick={()=>alert('그룹삭제')}>그룹삭제</button>
        </div>
        <GroupMember></GroupMember>

      </div>
  
  <Tabs
    value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example"
    style={{marginBottom:"15px"}}
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
