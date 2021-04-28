import React from "react";

import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import "./Login.css";

// import { Link } from "react-router-dom";

function Signup() {
  return (

    <Container component="main" maxWidth="xs" className="">
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
              <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus type="email" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                인증하기
              </Button>
            </Grid>
          </Grid>

          <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
          <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password check" type="password" id="password" autoComplete="current-password" />

          <TextField autoComplete="fname" margin="normal" name="Name" variant="outlined" required fullWidth id="Name" label="Name" autoFocus />
          <TextField autoComplete="fname" margin="normal" name="" variant="outlined" required fullWidth id="" label="Phone Number" autoFocus />
          <Button type="submit" fullWidth variant="contained" color="primary">
            sign in
          </Button>
        </form>
      </div>
    </Container>

  );
}

export default Signup;
