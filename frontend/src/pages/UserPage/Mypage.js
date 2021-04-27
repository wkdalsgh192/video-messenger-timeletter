import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';


import "./Mypage.css";

import LetterCardlist from '../../components/mypage/LetterCardlist'

function Mypage() {
  return (
    <div>
      <Grid container>
        <Grid item sm={4} md={7} class="myimg" />
        <Grid item sm={8} md={5} square>
          <Typography component="h5" variant="h5">
            이름
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            전화번호
          </Typography>
          <Button variant="outlined" color="primary">
            회원정보 수정
          </Button>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <h3>나의 전체 레터 조회</h3>
      <LetterCardlist></LetterCardlist>
    </div>
  );
}

export default Mypage;
