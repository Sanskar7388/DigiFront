import React from 'react';
import './Navbar.css';
import lo from './logo4.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='outer2'>
      <nav className="navbar">
        <div className="logo">
          <img src={lo} alt="Logo" />
          <div>
            <span className="brand-name">Agmitra Technologies</span>
          </div>
        </div>

        <div className="left-menu">
          <Link to="/">Home</Link>
          <Link to="/service">Contact Us</Link>
          <Link to="/contact">Product</Link>
        </div>

        <div className="right-menu">
          <Link to="/login" className="log">Login</Link>
          <Link to="/signup" className="log">Signup</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
