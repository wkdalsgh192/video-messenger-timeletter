import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import swal from "sweetalert";

import "./css/Login.css";
import "./css/Signup.css";

// import { Link } from "react-router-dom";
const { signUp } = require("../../_actions/user");

function Signup() {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [EmailCheck, setEmailCheck] = useState(false);
  const [Password, setPassword] = useState("");
  const [CheckPassword, setCheckPassword] = useState("");
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [EmailOk, setEmailOk] = useState(false);
  const [formState, setFormState] = useState(true);
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const onEmailHandler = event => {
    setEmail(event.currentTarget.value);
    console.log(Email);
    const emailVal = document.getElementById("email").value;
    if (emailVal.match(regExp) != null) {
      setEmailOk(true);
      setFormState(false);
    } else {
      setEmailOk(false);
      setFormState(true);
    }
  };

  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  };

  const onPasswordCheckHandler = event => {
    setCheckPassword(event.currentTarget.value);
  };
  const onNameHandler = event => {
    setName(event.currentTarget.value);
  };
  const onPhoneNumberHandler = event => {
    setPhoneNumber(event.currentTarget.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    if (!Email) {
      return alert("이메일을 입력하세요");
    }
    if (!Name) {
      return alert("이름을 입력하세요");
    }
    if (!PhoneNumber) {
      return alert("휴대폰 번호를 입력하세요");
    }
    // if (!EmailCheck) {
    //   return alert('이메일 인증을 하세요')
    // }
    if (!Password) {
      return alert("비밀번호를 입력하세요");
    }
    if (!CheckPassword) {
      return alert("비밀번호를 입력하세요");
    }
    // if (Password !== CheckPassword) {
    //   return alert('비밀번호가 일치하지 않습니다.')
    // }

    let body = {
      email: Email,
      name: Name,
      phone: PhoneNumber,
      password: Password,
    };
    console.log(body, "!!!!!!");
    dispatch(signUp(body));
    // .then(alert('성공'))
  };

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
    <div className="signupwrap" style={{marginTop:"50px"}}>
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
                  <TextField
                    variant="outlined"
                    error={formState}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    type="email"
                    onChange={onEmailHandler}
                  />
                  {/* {EmailOk ? <></> : <p>이메일 형식을 입력해주세요</p>} */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      if (EmailOk) {
                      setEmailCheck(true);
                      swal("Good job!", "이메일로 인증번호가 전송되었습니다.", "success");}
                      else {
                        swal('warn you','이메일형식이 옳바르지 않습니다.',"error")
                      }
                    }}
                  >
                    인증하기
                  </Button>
                </Grid>
                {emailCheckForm}
              </Grid>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onPasswordHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password check"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onPasswordCheckHandler}
              />

              <TextField autoComplete="fname" margin="normal" name="Name" variant="outlined" required fullWidth id="Name" label="Name" autoFocus onChange={onNameHandler} />
              <TextField autoComplete="fname" margin="normal" name="" variant="outlined" required fullWidth id="" label="Phone Number" autoFocus onChange={onPhoneNumberHandler} />
              <Button type="button" fullWidth variant="contained" color="primary" style={{ marginTop: "20px" }} onClick={onSubmitHandler}>
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
