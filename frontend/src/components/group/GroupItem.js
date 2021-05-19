import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
// import img1 from "./람쥐선더.jfif";
import "./GroupItem.css";
import { Container, Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import axios from "axios";
import { BASE_URL, TOKEN, USER_ID } from "../../constants";

function GroupItem() {
  const history = useHistory();

  const [items, setItems] = useState([
    // { img: img1, title: "첫번째 예시", cnt: 5 },
    // { img: img1, title: "두번째 예시", cnt: 3 },
  ]);

  useEffect(() => {
    axios
      .get(BASE_URL + "club/findMyClub", { headers: { Authorization: TOKEN } })
      .then(res => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
        setItems([]);
      });
  }, []);

  const item = items.map(i => (
    <Card key={i.clubId} className="groupitem" onClick={() => history.push("/group/detail/" + i.clubId)}>
      <CardActionArea>
        {/* 그룹 이미지 */}
        {/* <CardMedia className="img" image={img1} /> */}
        <CardContent className="content">
          {/* 타이틀 */}
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Typography gutterBottom variant="h4" component="h2">
              "{i.clubName}"
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {i.clubDesc}
            </Typography>
          </div>
          {/* 그룹 인원 */}
          <Typography gutterBottom variant="h5" component="h2">
            <EmojiPeopleIcon></EmojiPeopleIcon>- {1}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  const nogroup = <div className="nogroup">생성된 그룹이 없습니다.</div>;
  return <Container>{items.length !== 0 ? item : nogroup}</Container>;
}

export default GroupItem;