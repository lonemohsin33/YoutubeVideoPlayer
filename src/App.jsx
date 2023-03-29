import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./components/HomePage/Homepage";
import VideoPlayer from "./components/videoplayer/VideoPlayer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<VideoPlayer />} key={ Math.random()} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
