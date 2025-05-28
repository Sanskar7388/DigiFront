import React, { useState } from 'react';
import './NavbarMobile.css';
import lo from './logo4.png';
import me from './menu-bar.png';
import { Link } from 'react-router-dom';

function NavbarMobile() {
  const [slidingWind, setSlide] = useState("slidingWindow");

  const toggleSlide = () => {
    setSlide((prevState) =>
      prevState === "slidingWindow" ? " slidingWindow slidingWindow1" : "slidingWindow"
    );
  };

  return (
    <div className='outer2'>
      <nav className="navbar">
        <div className="logo">
          <img src={lo} alt="Logo" />
          <div>
            <span className="brand-name">Agmitra Technologies</span>
          </div>
        </div>
        <div>
          <img
            style={{ width: "30px", height: "30px" }}
            src={me}
            onClick={toggleSlide}
            alt="Menu"
          />
        </div>
      </nav>

      <div className={slidingWind}>
        <div className="left-menu">
            <a onClick={toggleSlide}>Back</a>
          <Link to="/">Home</Link>
          <Link to="/service">Contact</Link>
          <Link to="/contact">Products</Link>
        </div>

        <div className="right-menu">
          <Link to="/login" className="log">Login</Link>
          <Link to="/signup" className="log">Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
