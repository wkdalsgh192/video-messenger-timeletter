import React,{useEffect, useState} from "react";
import './GroupDetail.css';
import GroupMember from '../../components/group/GroupMember';
import { Container, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GroupLetter from "../../components/group/GroupLetter";
import './GroupDetail.css';
import './GroupList.css';
import axios from 'axios';
import { BASE_URL,TOKEN } from "../../constants";
import { useParams } from "react-router";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
function GroupDetail(props) {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [info, setInfo] = useState({});
  const [isDelete, setIsDelete] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onDeleteClub = () => {
    axios.delete(BASE_URL+"club/delClub?id="+id)
    .then((res)=>{console.log(res); window.location.replace('/group/list')})
    .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    let club_id = props.match.params.id;
    axios.get(BASE_URL+"club/findDetail?id="+club_id,{"Authorization":TOKEN})
      .then((res)=> {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((err)=> {
        console.log(err);
      })
  },[]);

  return (
    <Container className="GroupDetail" style={{color:"white"}} className="grouplist">
      <div>
        <div className="GroupMember fill">
          <Typography className="GroupMember-title">/그룹이름/</Typography>
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
        {/* <MenuItem onClick={handleClose}>멤버추가</MenuItem> */}
        <MenuItem onClick={()=>setIsDelete(true)}>그룹삭제</MenuItem>
        <Dialog
        open={isDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"그룹 삭제하시겠습니까?"}</DialogTitle>
        <DialogActions>
          <Button onClick={onDeleteClub} color="primary" style={{fontWeight:"bold"}}>
            예
          </Button>
        </DialogActions>
      </Dialog>
      </Menu>

        </div>
        <GroupMember members={info.members}></GroupMember>

      </div>
  
  <GroupLetter></GroupLetter>
    </Container>
  );
}

export default GroupDetail;
