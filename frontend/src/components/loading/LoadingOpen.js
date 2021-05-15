import React from 'react';
import video1 from "./편지방생.mp4";
import "./LoadingCreate.css";
function LoadingCreate() {
    const endfunction = () => {
        alert('영상끝남')
    }
    return (
        <video
            className="createLoading" 
            src={video1} 
            muted="muted" 
            autoplay="autoplay"
            onEnded={endfunction}
        ></video>
    )
}

export default LoadingCreate