import React, { useState } from "react";


import { Link } from 'react-router-dom';
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

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
      <Modal style={{ top: "30%" }} open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        <Paper component="form" className="">
          <InputBase className="" placeholder="비밀번호를 입력하세요" />
          <Link to="/letter/detail">
          <IconButton type="" className="" aria-label="search">
            <SearchIcon />
          </IconButton>
          </Link>
        </Paper>
      </Modal>
    </div>
  );
}

export default SearchModal;
