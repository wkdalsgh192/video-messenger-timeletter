import React from 'react'
import { Link } from 'react-router-dom';
import GroupItem from '../../components/group/GroupItem';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import './GroupList.css'
function GroupList() {
    return (
        <div>
            그룹 리스트 페이지
            <GroupItem></GroupItem>
            <Link to="/group/create">
                <AddToPhotosIcon className="plusbtn" fontSize='large'></AddToPhotosIcon>
            </Link>
        </div>
    )
}

export default GroupList
