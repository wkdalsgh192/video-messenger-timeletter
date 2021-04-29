import React, { useState } from "react";
import { useHistory } from "react-router";
import img1 from "./람쥐선더.jfif";
import "./GroupItem.css";
import { Container,Card,CardActionArea,CardContent, CardMedia,Typography } from "@material-ui/core";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

function GroupItem() {
  const history = useHistory();

  const [items, setItems] = useState([
    { img: img1, title: "첫번째 예시", cnt: 5 },
    { img: img1, title: "두번째 예시", cnt: 3 },
  ]);

  const item = items.map((i) => (
    <Card className="div" onClick={() => history.push("/group/detail")}>
      <CardActionArea>
        {/* 그룹 이미지 */}
        <CardMedia className="img" image={i.img} />
        <CardContent className="content">
          {/* 타이틀 */}
          <Typography gutterBottom variant="h5" component="h2">
            {i.title}
          </Typography>
          {/* 그룹 인원 */}
          <Typography gutterBottom variant="h5" component="h2">
            <EmojiPeopleIcon></EmojiPeopleIcon>- {i.cnt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  return <Container>{item}</Container>;
}

export default GroupItem;
