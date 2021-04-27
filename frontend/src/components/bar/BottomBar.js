import React from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { AiTwotoneHome } from 'react-icons/ai';
import { RiMailAddFill } from 'react-icons/ri';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './BottomBar.css'
function BottomBar() {
    return (
        <div className="bottombar">
            <Link to="/"><AiTwotoneHome className="icon"/></Link>
            <Link to="/letter/create"><RiMailAddFill className="icon" href="/letter/create"/></Link>
            <Link to="/letter/list"><HiOutlineMailOpen className="icon"/></Link>
            <Link to="/group/list"><HiUserGroup className="icon"/></Link>
        </div>
    )
}

export default BottomBar
