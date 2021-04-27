import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import DeleteIcon from "@material-ui/icons/Delete";

function LetterCard() {
  return (
    <Card>
      <Grid container alignItems="center">
        <Grid item sm={4} md={4}>
          <Avatar src="/broken-image.jpg" />
        </Grid>

        <Grid item sm={6} md={6} square>
          <CardContent>
            <Typography component="h5" variant="h5">
              ### 에게 보낸 / 받은 레터
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              오픈 날짜
            </Typography>
          </CardContent>
        </Grid>
        <Grid item sm={2} md={2}>
          <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} size="small">
            Delete
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default LetterCard;
