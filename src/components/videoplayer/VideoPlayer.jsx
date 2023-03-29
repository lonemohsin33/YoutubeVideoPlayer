import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ToastContainer ,toast} from 'react-toastify';
import './videoplayer.css'
const VideoPlayer = () => {
    const [searchParams] = useSearchParams();
  // const [rvideos, SetRVideos] = useState("")
  const navigate = useNavigate()
    const [pagec, setpagec]= useState(0)
  // const refresh = () => window.location.reload(true);

    

  let title = searchParams.get("title");
  
   
    
   
    let videoid = window.location.pathname.slice(1)
    console.log(videoid);
    // useEffect(() => {
    //     getRelatedVideos()
    // },[pagec])
  //   async function getRelatedVideos() {
  //       const res = await fetch(
  //         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoid}&type=video&maxResults=20&regionCode=IN&key=AIzaSyAtX8ANuDUDw-t6ss2b-a0VuXEe6C2n7yI`
  //       );
  //       const data = await res.json()
  //       console.log(data)
  //     if (data.error) {
  //           alert(data.error.message)
  //       }
  //       SetRVideos(data.items)
  // }
  
 
  
  return (
    <div className="cont">
      <div className="maincontent">
        <iframe
          src={`https://www.youtube.com/embed/${videoid}`}
          className="videoplayer"
        />
        <h2 className="titlevp"> {title}</h2>
      </div>
    </div>
  );
}

export default VideoPlayer
