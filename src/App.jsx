import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import VideoPlayer from "./components/videoplayer/VideoPlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element= {<VideoPlayer/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
