import React from "react";
import './GroupDetail.css';
import GroupCapsule from '../../components/group/GroupCapsule';
import GroupMember from '../../components/group/GroupMember';
import { Container, Typography } from '@material-ui/core';
function GroupDetail() {

  return (
    <Container className="GroupDetail" style={{marginTop:"50px"}}>
      <div>
        <div className="GroupMember">
          <Typography className="GroupMember-title">그룹상세보기</Typography>
          <button onClick={()=>alert('멤버관리')}>멤버관리</button>
          <button onClick={()=>alert('그룹삭제')}>그룹삭제</button>
        </div>
        <GroupMember></GroupMember>

      </div>
      <div>
        <Typography>오픈된 캡슐</Typography>
        <GroupCapsule></GroupCapsule>
      </div>
      <div>
        <Typography>비오픈 캡슐</Typography>
        <GroupCapsule></GroupCapsule>
      </div>
    </Container>
  );
}

export default GroupDetail;
