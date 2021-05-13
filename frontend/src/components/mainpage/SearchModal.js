import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import 'components/mainpage/SearchModal.css'

function SearchModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{marginTop:"", marginBottom:"20px"}}>
      <Paper component="form" className="" style={{display:"flex",justifyContent:"space-around",paddingLeft:"10px"}} >
        <InputBase className="" placeholder="레터 번호를 입력하세요." />
        <IconButton className="" type="button" aria-label="search" onClick={handleOpen}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"레터 암호를 입력해주세요!"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="text"
            fullWidth
          />
          <DialogContentText id="alert-dialog-description">
           회원가입하고 답장을 보내보세요 :)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            제출하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SearchModal;
