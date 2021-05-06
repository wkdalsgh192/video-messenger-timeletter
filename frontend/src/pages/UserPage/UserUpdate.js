import React from 'react'

import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import "./css/Login.css";
import "./css/UserUpdate.css";

function UserUpdate() {
    return (
        <div className="" style={{marginTop:"50px"}}>
      <div className="">
        <Container maxWidth="xs" className="">
          <CssBaseline />
          <div>
            <Grid container justify="center" className="paperinner">
            <Avatar src="/broken-image.jpg" />
            </Grid>

            <Grid container justify="center" className="paperinner2">
              <Typography component="h1" variant="h5">
              (name) 님 회원정보 수정
              </Typography>
            </Grid>

            <form noValidate>

              <TextField variant="outlined" margin="normal" required fullWidth name="password" label="변경할 비밀번호" type="password" id="password" autoComplete="current-password" />
              <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password check" type="password" id="password" autoComplete="current-password" />
              <TextField autoComplete="fname" margin="normal" name="" variant="outlined" required fullWidth id="" label="Phone Number" autoFocus />
              <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "20px" }}>
                수정하기
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
    )
}

export default UserUpdate
