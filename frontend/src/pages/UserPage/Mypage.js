import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { Container } from "@material-ui/core";

import "./Mypage.css";

import LetterCardlist from "../../components/mypage/LetterCardlist";

function Mypage() {
  return (
    <div>
      <Container  maxWidth="xs" className="">
      <h2>mypage</h2>
      <Card style={{marginTop:"80px"}}>
       
          {/* <CardMedia image="/static/images/cards/live-from-space.jpg" title="Live from space album cover" /> */}
          <div>
            <CardContent>
              <div class="myimg imgpop"></div>
              <Typography component="h5" variant="h5">
                이름
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                전화번호
              </Typography>
            </CardContent>
            </div>
            
            <Divider variant="middle" />
            <Grid container direction="row" justify="flex-end" alignItems="center">
          <CardActions>
            <Button size="small" color="primary">
              회원정보 수정
            </Button>
          </CardActions>
        </Grid>
      </Card>

      {/* <Grid container>
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
      <Divider variant="middle" /> */}
      <h3>나의 전체 레터 조회</h3>
      <LetterCardlist></LetterCardlist>
      </Container>
    </div>
  );
}

export default Mypage;
