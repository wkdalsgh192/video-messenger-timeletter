import React,{useEffect} from 'react';
import video1 from "./편지납치.mp4";
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
            autoPlay="autoplay"
            onEnded={endfunction}
        ></video>
    )
}

export default LoadingCreate
