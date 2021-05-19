import React, {useEffect, useState} from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Container } from "@material-ui/core";
import { Link } from 'react-router-dom';

import "./css/Mypage.css";
import "../css/main.scss";

import LetterCardlist from "../../components/mypage/LetterCardlist";
import axios from 'axios';
import { BASE_URL,TOKEN } from '../../constants';
import { useDispatch } from "react-redux";
import { mypage } from "_actions/user";
import MyLetter from "../../components/mypage/MyLetter";
import ScrollToTop from "components/Scroll/ScrollToTop";
function Mypage() {
  const dispatch = useDispatch();
  const [state, setstate] = useState([])
  useEffect(() => {
    console.log(TOKEN,'token');
    axios.get(BASE_URL+"user/get",{headers:{"Authorization":TOKEN}})
      .then((res)=> {setstate(res.data); console.log(res.data,'옴')})
      .catch((err)=> console.log(err))
  }, [])

  return (
    <div className="mypage">
      <ScrollToTop />
      <div className="night">
        <div className="shooting_starts"></div>
        <div className="shooting_starts"></div>
        <div className="shooting_starts"></div>
        <div className="shooting_starts"></div>
      </div>
      <Container  maxWidth="xs" className="">
      <h2>mypage</h2>
      <Card style={{marginTop:"50px"}}>
       
          {/* <CardMedia image="/static/images/cards/live-from-space.jpg" title="Live from space album cover" /> */}
          <div>
            <CardContent>
              <div className="myimg imgpop"></div>
              <Typography component="h5" variant="h5">
                {state.name}
              </Typography>
              <Typography component="h5" variant="h5">
                {state.email}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {state.phoneNumber}
              </Typography>
            </CardContent>
            </div>
            
            <Divider variant="middle" />
            <Grid container direction="row" justify="flex-end" alignItems="center">
          <CardActions>
            <Button size="small" color="primary">
            {/* <Link to="/userupdate">
              회원정보 수정
              </Link> */}
            </Button>
          </CardActions>
        </Grid>
      </Card>
      <h3>나의 전체 레터 조회</h3>
      {/* <LetterCardlist></LetterCardlist> */}
      <MyLetter letterList={state.letters}></MyLetter>
      </Container>
    </div>
  );
}

export default Mypage;
