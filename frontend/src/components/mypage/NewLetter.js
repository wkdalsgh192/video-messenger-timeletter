import React from "react";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

import './css/LetterCard.css';


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
        <div className="lettercontent2">
            <div>레터 이름</div>
            <div> 오픈시각 d-day</div>
            <div className="lettercontent" style={{marginLeft:"10px", marginBottom:"10px"}}>
          <Chip variant="outlined" size="small" icon={<FaceIcon />} label="From.조현섭" color="secondary" />
          {/* <Chip variant="outlined" size="small" icon={<FaceIcon />} label="To.조현섭" color="secondary" />
          <Chip variant="outlined" size="small" icon={<FaceIcon />} label="With.캐터피" color="secondary" /> */}
        </div>
        </div>
      </div>

 
  );
}

export default NewLetter;
