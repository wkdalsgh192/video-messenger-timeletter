import { Button, Container, Input, Typography,Chip } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { BASE_URL, USER_ID,TOKEN } from "../../constants";
import "./GroupCreate.css";
function GroupCreate() {
  const history = useHistory();
  const [name, setName] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [photo, setPhoto] = useState([""]);
  const [description, setDescription] = useState([""]);
  
  const [members, setMembers] = useState(["abcd@naver.com","efgh@naver.com"]);

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onDiscriptionHandler = (event) => {
    setDescription(event.currentTarget.value);
  };
  const onMemberControl = () => {
    setMembers(members=>[...members,email]);
    setEmail('');
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      "clubName":name,
      "desc":description,
      'masterId':USER_ID,
      "membersId":[USER_ID],
      "profile":"없음"
    };
    axios.post(BASE_URL+"club/insert",body,{"Authorization":TOKEN})
      .then((res)=>{console.log(res.data); 
        // window.location.replace("/group/list");
        history.push("/group/list")
      })
      .catch((err)=>{console.log(err); alert("")})
  }
  const member = members.map((target)=>(
    <div style={{marginBottom:"2px"}}>
        <Chip label={target} onDelete={() => setMembers(members.filter(i=>i!==target))} color="primary" />
    </div>
  ));

  return (
    <Container className="groupcreate">
      <br />
      <Typography>그룹생성</Typography>
      <br />
      <div style={{padding:"10px",backgroundColor:"#e8eaf6",borderRadius:"10px"}}>
        <div>
          <Typography>그룹이름</Typography>

          <Input
            fullWidth
            required
            autoFocus
            placeholder="이름"
            onChange={onNameHandler}
          />
        </div>

        <div>
          <Typography>멤버추가</Typography>

          <Input
            id="member"
            style={{ width: "230px" }}
            required
            autoFocus
            placeholder="회원의 이메일"
            value={email}
            onChange={onEmailHandler}
          />
          <Button variant="outlined" style={{ marginLeft: "3px" }} onClick={onMemberControl}>
            추가
          </Button>
        </div>
        {member}

        <div>
          <Typography>사진등록</Typography>

          <Input type="file" required />
        </div>

        <div>
          <Typography>그룹설명</Typography>

          <Input
            fullWidth
            required
            autoFocus
            placeholder="내용"
            onChange={onDiscriptionHandler}
          />
        </div>
        <br/>
        <div style={{textAlign:"center"}}>
            <Button variant="outlined" style={{marginTop: "3px" }} onClick={onSubmitHandler}>
            그룹 생성
            </Button>
        </div>
      </div>
    </Container>
  );
}

export default GroupCreate;
