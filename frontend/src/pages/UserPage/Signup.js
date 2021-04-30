import React, { useState } from "react";

import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import swal from 'sweetalert';

import "./Login.css";
import "./Signup.css";

// import { Link } from "react-router-dom";

function Signup() {

  const [Email,setEmail] = useState("");
  const [EmailCheck, setEmailCheck] = useState(false);
  const [Password, setPassword] = useState("");
  const [CheckPassword, setCheckPassword] = useState("");
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");


  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onPasswordCheckHandler = (event) => {
    setCheckPassword(event.currentTarget.value);
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!Email) {
      return alert('이메일을 입력하세요')
    }
    if (!Name) {
      return alert('이름을 입력하세요')
    }
    if (!PhoneNumber) {
      return alert('휴대폰 번호를 입력하세요')
    }
    if (!EmailCheck) {
      return alert('이메일 인증을 하세요')
    } else {
    }
    if (!Password) {
      return alert('비밀번호를 입력하세요')
    }
    if (!CheckPassword) {
      return alert('비밀번호를 입력하세요')
    }
    if (Password !== CheckPassword) {
      return alert('비밀번호가 일치하지 않습니다.')
    }
  }



  let emailCheckForm = null;

  if (EmailCheck) {
    emailCheckForm = (
      <>
        <Grid item xs={12} sm={6}>
          <TextField variant="outlined" margin="normal" required fullWidth label="인증번호 입력" autoFocus type="number" onChange={setEmailCheck} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button fullWidth variant="contained" color="primary">
            확인
          </Button>
        </Grid>
       
      </>
    );
  }

  return (
    <div className="signupwrap">
      <div className="signup-html">
        <Container maxWidth="xs" className="">
          <CssBaseline />
          <div>
            <Grid container justify="center" className="paperinner">
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>

            <Grid container justify="center" className="paperinner2">
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
            </Grid>

            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus type="email" onChange={setEmail}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button fullWidth variant="contained" color="primary" onClick={() => {setEmailCheck(true);  swal("Good job!", "이메일로 인증번호가 전송되었습니다.", "success");}}>
                    인증하기
                  </Button>
                </Grid>
                {emailCheckForm}
              </Grid>

              <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={setPassword}/>
              <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password check" type="password" id="password" autoComplete="current-password" onChange={setCheckPassword} />

              <TextField autoComplete="fname" margin="normal" name="Name" variant="outlined" required fullWidth id="Name" label="Name" autoFocus onChange={setName}/>
              <TextField autoComplete="fname" margin="normal" name="" variant="outlined" required fullWidth id="" label="Phone Number" autoFocus onChange={setPhoneNumber}/>
              <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "20px" }}>
                sign up
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Signup;
