import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import VideoPlayer from '../videoplayer/VideoPlayer';
import './videoitem.css'
const VideoItem = (props) => {

  const navigate = useNavigate()
  const [id, setId] = useState(props.id)
const [title, setTitle] = useState(props.title);
  
  function handleNewclick() {
   navigate(`/${id}?title=${title}`);
 }
  console.log(props);
 
    return (
      <div className="videoitem">
        
        <img src={props.src} onClick={handleNewclick} />
        <h3 className="vidtitle" onClick={handleNewclick}>
          {props.title}
        </h3>
      </div>
    );
}

export default VideoItem
