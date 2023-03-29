import React, { useEffect, useState } from "react";
import "./homepage.css";
import VideoItem from "../Video/VideoItem";

const Homepage = (props) => {
  const [videos, SetVideos] = useState("");
  
  console.log(props.vids)

  useEffect(() => {
    getItems();
  }, [props]);
  async function getItems() {
    if (props.vids.length > 0) {
      SetVideos(props.vids)
    } else {
      
      const res = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyBXU0zxIGg0pP8zqS5cUuw_cga1BxNUYQY"
      );
        const data = await res.json();
        // console.log(data);
        SetVideos(data.items);
      }
  }
  return (

      
      <div className="container">
        {videos
          ? videos.map((item) => (
              <VideoItem key={item.id} id={item.id} title={item.snippet.title} src={item.snippet.thumbnails.high.url} desc={item.snippet.description}></VideoItem>
            ))
          : ""}
      </div>
   
  );
};

export default Homepage;
