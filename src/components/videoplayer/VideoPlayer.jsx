import React, { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ToastContainer ,toast} from 'react-toastify';
import './videoplayer.css'
const VideoPlayer = () => {
    const [searchParams] = useSearchParams();
    const [rvideos, SetRVideos] = useState("")

    const title = searchParams.get("title");
   
    
   
    let videoid = window.location.pathname.slice(1)
    console.log(videoid);
    useEffect(() => {
        getRelatedVideos()
    }, [])
    async function getRelatedVideos() {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoid}&type=video&maxResults=20&regionCode=IN&key=AIzaSyANk4SvuQxf5WwnhmSglP27fdK3zfZb4L4`
        );
        const data = await res.json()
        console.log(data)
        if (data.error) {
            alert(data.error.message)
        }
        SetRVideos(data.items)
    }
  return (
    <div className="cont">
      <div className="maincontent">
        <iframe
          src={`https://www.youtube.com/embed/${videoid}`}
          className="videoplayer"
        />
        <h2 className="titlevp"> {title}</h2>
      </div>
      <div className="sidecontent">
        {rvideos
          ? rvideos.map((item) => (
              <Link to={`/${item.id.videoId}?title=${item.snippet.title}`}>
                <div
                  className="sideitems"
                  key={item.id.videoId}
                  
                >
                  <img src={item.snippet.thumbnails.standard.url} />
                  <h3> {item.snippet.title} </h3>
                </div>
              </Link>
            ))
          : ""}
          </div>
    </div>
  );
}

export default VideoPlayer
