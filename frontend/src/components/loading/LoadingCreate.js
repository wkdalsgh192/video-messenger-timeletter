import React from 'react';
import video1 from "./편지납치.mp4";
import "./LoadingCreate.css";
function LoadingCreate() {
    return (
        <video className="createLoading" src={video1} muted="muted" autoplay="autoplay">
            {/* <source src={video1}></source> */}
        </video>
    )
}

export default LoadingCreate
