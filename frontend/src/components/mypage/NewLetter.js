import React from "react";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import yellow from '@material-ui/core/colors/yellow';
import { Link } from 'react-router-dom';

import './css/LetterCard.css';

const yw = yellow[900]

function NewLetter() {
  return (

      <div class="night2">
        <span class="moon"></span>
        <span class="spot1"></span>
        <span class="spot2"></span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Link to="/letter/detail">
        <div className="lettercontent2">
            <div style={{fontSize:"20px"}}>레터 이름</div>
            <div style={{fontSize:"35px"}}> 오픈시각 d-day</div>
            <div className="lettercontent" style={{marginTop:"10px", marginBottom:"10px"}}>
          <Chip variant="outlined" size="middle" icon={<FaceIcon />} label="From.조현섭" color="yw" />
          {/* <Chip variant="outlined" size="small" icon={<FaceIcon />} label="To.조현섭" color="secondary" />
          <Chip variant="outlined" size="small" icon={<FaceIcon />} label="With.캐터피" color="secondary" /> */}
        </div>
        </div>
        </Link>
      </div>

 
  );
}

export default NewLetter;
