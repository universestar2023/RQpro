import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import logoImg from './logoImg.png';
import { Link } from 'react-router-dom';



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password
      });
      
      console.log('Login response:', response);

      // Check if response contains data property
      if (response.data) {
        console.log('Login successful:', response.data);
        // Handle successful login (e.g., redirect user to dashboard)
      } else {
        console.error('Login failed: Invalid response from server');
        setError('Invalid response from server');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('Failed to login');
    }
  };

  return (
    <>
    <div className="login-container">
      <div className="login-form">
      <div className="logo5">
      <img src={logoImg} alt=""/>
        </div>
        <h2>Log In Now</h2>
      <p className='head5'>Unlock the world of legal knowledge!</p>

        <p>Enter your credentials below:</p>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="login-button" onClick={handleLogin}><Link to='/home'>Login</Link></button>
        <div className="register-link">
          <p>New to the application? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
