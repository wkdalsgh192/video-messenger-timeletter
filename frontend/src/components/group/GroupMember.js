import React, { useState } from 'react';
import './GroupMember.css';
import {Chip} from '@material-ui/core';
function GroupMember() {
    const [groupMembers, setGroupMembers] = useState(['장민호','이대헌', '이혜진', '안세익','조현섭']);
    const handleDelete = () => {
        alert('그룹 멤버를 삭제 하시겠습니까?');
    }
    const member = groupMembers.map((groupMember) => (
        <div className="item">
            <Chip onDelete={handleDelete} label={groupMember} />

        </div>
    ))
    return (
        <div className="member">
            {member}    
        </div>
    )
}

export default GroupMember
