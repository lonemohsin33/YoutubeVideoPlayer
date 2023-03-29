import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
     const [val, setVal]= useState("")
  return (
    <div>
      <nav className="navbar1">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 className="H1"> Youtube player</h1>
        </Link>

        <Link to={"/"} className='link'>
          {" "}
          <input
            type="text"
            value={val}
            className="searchbar"
            placeholder="Search for a video"
            onChange={(e) => setVal(e.target.value)}
          />
        </Link>
      </nav>
    </div>
  );
}

export default Header
