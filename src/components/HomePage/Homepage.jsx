import React, { useEffect, useState } from "react";
import "./homepage.css";
import VideoItem from "../Video/VideoItem";

const Homepage = () => {
  const [videos, SetVideos] = useState("");

  useEffect(() => {
    getItems();
  }, []);
  async function getItems() {
    const res = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyDiK0f0LmWGrnUlB4eyWSN-F-Q5Xq08Ce0"
    );
    const data = await res.json();
    console.log(data);
    SetVideos(data.items);
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
