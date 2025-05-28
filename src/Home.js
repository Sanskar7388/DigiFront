// Home.js
import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

function Home() {
  return (
    <div className="App"  >
      {/* Desktop Navbar */}
      <div className="leptop_Nab" style={{ width: '100%' }}>
        <Navbar />
      </div>

      {/* Mobile Navbar */}
      <div className="mobile_Nab">
        <NavbarMobile />
      </div>

      {/* Main Content */}
      <div className="content">
        <div style={{ marginTop: '0px' }}>
          <h3>Introducing</h3>
          <h1>Digisugar</h1>
          <p>India's Indigenous Polarimeter, setting new standards in</p>
          <p>accuracy and efficiency across multiple industries.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
