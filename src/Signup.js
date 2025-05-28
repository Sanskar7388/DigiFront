import React, { useState } from 'react';
import './Signup.css';
import close from './close.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo1 from './logo1.png';

function Signup() {
  const api = process.env.REACT_APP_API;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const [error, setError] = useState(''); // Error state
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Show loading message

    try {
      const result = await axios.post(`${api}/register`, { name, email, password });
      
      if (result.data.message) {
        alert(result.data.message);
        navigate('/login');
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError('Signup failed. Please try again.');
    }

    setIsLoading(false); // Hide loading message after response
  };

  return (
    <div className="outer">
      <div className='coloring'>
        <img src={logo1} style={{ height: "100px" }} alt="Logo" />
        <h4>AGMITRA TECHNOLOGIES</h4>
        <div className="signup-container">
          <Link to="/">
            <img src={close} alt="Close" className="cross-icon" />
          </Link>
          <h2>Signup</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className='button1' onClick={!isLoading ? handleSubmit : null}>
              {isLoading ? "Signing up..." : "Signup"}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
