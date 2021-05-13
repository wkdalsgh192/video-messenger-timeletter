import React, { useState } from 'react';
import './GroupMember.css';
import {Chip} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';


function GroupMember(props) {
    const [groupMembers, setGroupMembers] = useState(['장민호','이대헌', '이혜진', '안세익','조현섭']);
    const handleDelete = () => {
        alert('그룹 멤버를 삭제 하시겠습니까?');
    }
    // console.log(props.members,'12312')
    let member = null;
    if (props.members) {

        member = props.members.map((groupMember) => (
            <div className="item" key={groupMember.user_id} style={{marginTop:"10px"}}>

            <Chip className="member-chip" size="medium" label={groupMember.name}  onDelete={handleDelete}/>

        </div>
     ))
    }
    return (
        <div className="member">
                  {member}
                  <div className="item" style={{marginTop:"10px"}}> 
                  <Chip className="member-chip" label="+" />
                  </div>
            
        </div>
        
    )
}

export default GroupMember
