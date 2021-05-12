import React, { useState } from "react";

import "./css/Login.css";

import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { Link } from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../constants";
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {'email':Email, 'password':Password};
    axios.post(BASE_URL+"user/login",body)
      .then((res)=>{
        window.localStorage.setItem("email",Email);
        // console.log(res.data.token);
        window.localStorage.setItem("token",res.data.token);
        window.localStorage.setItem("user_id",res.data.userId);

        window.location.replace("/")
      
      })
      .catch((err)=>{console.log(err);alert('로그인 실패')})
  };

  return (
    <div className="login-wrap" style={{ marginTop: "50px" }}>
      <Paper className="papercs">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Grid container justify="center" className="paperinner">
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid container justify="center" className="paperinner2">
              <Typography component="h1" variant="h5">
                Login
              </Typography>
            </Grid>

            <form noValidate onSubmit={onSubmitHandler}>
              <TextField
                variant="outlined"
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "20px" }}
              >
                Login
              </Button>
              <Grid container style={{ marginTop: "20px" }}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup">{"회원가입"}</Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Paper>
    </div>
  );
}

export default Login;
