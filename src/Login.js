import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import close from './close.png';
import logo1 from "./logo1.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const navigate = useNavigate();
  const api = process.env.REACT_APP_API;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Show loading message

    try {
      const result = await axios.post(`${api}/login`, { email, password }, { withCredentials: true });

      if (result.data.message === "Success") {
        localStorage.setItem('userName', result.data.userName);
        alert("Login Successful!");
        navigate("/dashboard");
      } else {
        setError(result.data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError('Login failed. Please try again.');
    }

    setIsLoading(false); // Hide loading message after login attempt
  };

  return (
    <div className="outer">
      <div className='coloring'>
        <img src={logo1} style={{ height: "100px" }} alt="Logo" />
        <h4>AGMITRA TECHNOLOGIES</h4>
        <div className="login-container">
          <Link to="/">
            <img src={close} alt="Close" className="cross-icon" />
          </Link>
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading} // Disable input when loading
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
                disabled={isLoading} // Disable input when loading
              />
            </div>
            <div className='buttonStyle' onClick={!isLoading ? handleSubmit : null}>
              {isLoading ? "Logging in..." : "Login"}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
