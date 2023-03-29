import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import VideoPlayer from '../videoplayer/VideoPlayer';
import './videoitem.css'
const VideoItem = (props) => {

  const navigate= useNavigate()
  console.log(props);
  useEffect(() => {
    
  },[window.location.href])
  
  
    return (
      <div className="videoitem">
        <Link
          style={{ textDecoration: "none" }}
          to={`/${ props.id.videoId }?title=${props.title}`}
        >
          <img src={props.src}/>
          <h3 className="vidtitle"> {props.title}</h3>
        </Link>
      </div>
    );
}

export default VideoItem
