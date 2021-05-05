import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import MapDetail from "../../components/timeletter/MapDetail"

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
}))

// 함수형 컴포넌트
const LetterDetail = () => {
  let { id } = useParams()
  const classes = useStyles()
  useEffect(() => {
    
  }, [])

  // 데이터
  const letter = {
    id: 1,
    title: 'letter1',
    media: '',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur incidunt perferendis a sint reprehenderit, error vitae inventore, commodi optio tempore magnam aut odit dolorum eaque veritatis magni dolorem odio qui!',
    openDate: '2021-05-04',
    openLocal: [33.450701, 126.570667],
    alert: '',
    private: true,
    target: '',
    isOpen: true,
  }

  const content = (
    <div>
      <Typography variant="subtitle1">- 내용</Typography>
      <Card>
        <CardContent>
          <Typography>{letter.content}</Typography> 
        </CardContent>
      </Card>
      <Typography variant="subtitle1">- 첨부파일 : {letter.media}</Typography>
    </div>
  )

  return (
    <Container className={classes.container} maxWidth="xs">
      <Typography className={classes.title} variant="h6">레터 상세조회</Typography>
      <div className={classes.paper}>
        <Typography variant="subtitle1">- 이름 : {letter.title}</Typography>
        {letter.isOpen ? content : null}
        <Typography variant="subtitle1">- 오픈날짜 : {letter.openDate}</Typography>
        <Typography variant="subtitle1">- 오픈장소</Typography>
        <MapDetail position={letter.openLocal} />
      </div>
    </Container>
  )
}

export default LetterDetail
