import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import letter from "../../static/images/letter.png"

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '80px',
  },
  title: {
    marginTop: '16px',
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e8eaf6',
    padding: theme.spacing(0, 2),
  },
  media: {
    height: 80,
  },
}))

// 함수형 컴포넌트
const LetterList = () => {
  const classes = useStyles()

  const openCapsules = [
    {
      title: 'letter1'
    },
    {
      title: 'letter2'
    },
    {
      title: 'letter3'
    },
  ]

  const notOpenCapsules = [
    {
      title: 'letter1'
    },
    {
      title: 'letter2'
    },
    {
      title: 'letter3'
    },
  ]

  return (
    <Container className={classes.container} maxWidth="xs">
      <Typography className={classes.title} variant="h6">캡슐조회</Typography>
      <div className={classes.paper}>
        <Typography className={classes.title} variant="subtitle1">오픈 캡슐</Typography>
          <Grid container spacing={4} justify="center">
            {openCapsules.map(openCapsule => (
              <Grid item>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image={letter}
                  />
                  <CardContent>{openCapsule.title}</CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        <Typography className={classes.title} variant="subtitle1">비오픈 캡슐</Typography>
          <Grid container spacing={4} justify="center">
            {notOpenCapsules.map(notOpenCapsule => (
                <Grid item>
                  <Card>
                    <CardMedia
                      className={classes.media}
                      image={letter}
                    />
                    <CardContent>{notOpenCapsule.title}</CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
      </div>
    </Container>
  )
}

export default LetterList
