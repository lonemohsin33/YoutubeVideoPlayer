import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import VideoPlayer from '../videoplayer/VideoPlayer';
import './videoitem.css'
const VideoItem = (props) => {

  
    return (
      <div className="videoitem">
        <Link
          style={{ textDecoration: "none" }}
          to={`/${props.id}?title=${props.title}`}
        >
          <img src={props.src} />
          <h3 className="vidtitle"> {props.title}</h3>
        </Link>
      </div>
    );
}

export default VideoItem
