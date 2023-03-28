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
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyANk4SvuQxf5WwnhmSglP27fdK3zfZb4L4"
    );
    const data = await res.json();
    console.log(data);
    SetVideos(data.items);
  }
  return (
    <div>
      <nav className="navbar1">
        <h1 className="H1"> Youtube player</h1>
      </nav>
      <div className="container">
        {videos
          ? videos.map((item) => (
              <VideoItem key={item.id} id={item.id} title={item.snippet.title} src={item.snippet.thumbnails.high.url} desc={item.snippet.description}></VideoItem>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Homepage;
