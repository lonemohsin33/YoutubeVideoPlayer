import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Homepage from '../HomePage/Homepage';
import VideoPlayer from '../videoplayer/VideoPlayer';
import './header.css'
const Header = () => {
    const [val, setVal] = useState("")
    const [searchqvid, setSearchqvid] = useState([])
    
    let uri = window.location.pathname

    useEffect(() => {
        handclick()
    },[])

    async function handclick() {
        console.log(val)
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${val}&key=AIzaSyAOVmE74uhO0FU4vLKSekvgodDzP422194`
        );
        
        const data = await res.json()
        setSearchqvid(data.items)

    }

  return (
    <div>
      <nav className="navbar1">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 className="H1"> Youtube player</h1>
        </Link>

        <Link to={"/"} className="link">
          {" "}
          <input
            type="text"
            value={val}
            className="searchbar"
            placeholder="Search for a video"
            onChange={(e) => setVal(e.target.value)}
          />
          <img
            onClick={handclick}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlklEQVR4nO1ZT0gUYRSfWwXWLbBrYMegU12N2AxaVNzdDNN5b2ZSWFlDI/oDZYHkInVYiSy11YJwuyVo2rFLhqRJWeDFjTzZUkK5YbrxxZtmZ78ZF1l3v9lcmAcPlplhvt9v3u+9971vJck111zLyxoaGvYh4llEHEDEaQD4CgDrhn+la4jYL8tyvaIoe6WdYo2NjYcQ8REAJBGR5eL0LAAMAkDFfwPu9/v3AMAdANjIFXgWIhSdHlmWdxcVPABUAMCHTaDarjA1PMLU6CxTY4tMG13RnX7r18Ij+jNZyEw1NzcfKAp4RVGOGJrOAOjoZOrQO6aN/8rJ1SfzTLnUZY/GUlNT0+FifPkMeFVjau9Lpo0lcwZv+liSqb2T+jt4ErIslzsCnnQKAHMm+JZWpg7PbR+43YfnmNLSykfjLeWXcAKUsPyX10SAT0vq8XuG6nk+EreEl0q+2uiyEQTeJBGZ4An8FColqvPplysXb+an+RxyQuno5EncF9Zh+SYlUjqbojA0y+fCqpCObWwPjDp/1THwaUeuTwDAGREEBkz5hEccJ6B0P+UJPBRBYNpM3uis4wTU6IylQxdMAAASJoFnny2L9UytsU+JFPuYSLHw6zUh97RYnCewLCICv80Epr0NtxgBWPrxR/f5RErIPW10hZfQmmAC350n8PybWAIWCcXilsUo/ARmPosU8r2nxhaFSyiTxEPOJ7EmOolpDDQJFLmMIuKDggnQDGv2gdBl5wm0WRqZv2ACwWCwjNp6Rka5Dy6FbiWCwWCZJMJoADej0H6daePOb+YQsV8IeG4SW89spyfFSyfyggdPpfugMAIGiR7LKClQSlkGmm7JiZGSypoppZZWIVtr+hD8SAkAC6FQaJdwAgaJckT8YolEZCLPASf5TzaKaj9iSSHiOckpo6MPOj2wLHrhGlMHp7dVbZT2G1sdeqUcJYGI+wHglX1h6hPUiGhLzB9safQ7OqPfo2eynNAt2E/4ADHl9dd3OUaCdEqnB3yPyMOp2tymdyGiL00CENmJah87erKanaoNiJmNt8oLGsC3SWSVpi17qUREnwywkQafdsdJkFHXpBmW9i8A8IZ2ksYXJl+mawDQh4iBrTrsaV99Jw+e/FhVDauqCdyTSsU8tf67dhLknlpfn1Qq5nFJ7BDzuJHYIVZVE4jYk7rSWxeXSsk8nJyOe31LRf9vTVQkKr118ZIE75prkvP2F02VetuukE8fAAAAAElFTkSuQmCC"
          />
        </Link>
      </nav>
      {uri === "/" ? <Homepage vids={searchqvid} /> : ""}
    </div>
  );
}

export default Header
