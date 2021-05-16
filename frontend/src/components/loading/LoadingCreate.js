import React,{useEffect} from 'react'
import video1 from "./CreateLetter.mp4"
import "./LoadingCreate.css"
import { useHistory } from 'react-router-dom';
const LoadingCreate = () => {
  const history = useHistory()

  const endfunction = () => {
    alert('레터 생성완료')
    history.go()
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
