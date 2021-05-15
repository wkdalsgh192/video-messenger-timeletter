import React from 'react';
import {
  Chip,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import FaceIcon from '@material-ui/icons/Face'
import './css/LetterListItem.css'


const LetterListItem = (props) => {
  const history = useHistory()

  const sender = 'From.' + props.letter.userName
  const letterUrl = 'detail/' + props.letter.letterId

  const handleClick = () => {
    if (props.letter.isOpen === true) {
      history.push(letterUrl)
    } else {
      alert('비오픈 레터는 조회할 수 없습니다.')
    }
  }

  return (
    <div className="trashnone">
      <div className="night2">
        <span className="moon"></span>
        <span className="spot1"></span>
        <span className="spot2"></span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div onClick={handleClick}>
          <div className="lettercontent2">
            <div style={{fontSize:"20px", color: '#fff'}}>{props.letter.title}</div>
            <div style={{fontSize:"35px", color: '#fff'}}> 오픈날짜 {props.letter.openDate}</div>
            <div className="lettercontent" style={{marginTop:"10px", marginBottom:"10px"}}>
              <Chip variant="outlined" size="medium" icon={<FaceIcon />} label={sender} color="primary" />
            </div>
          </div>
        </div>
      </div>          
    </div>
  );
};

export default LetterListItem;