import React from 'react';
import Navbar from '../LandingPage/header/navbar';
import './login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', this.state.username, this.state.password);
  }

  render() {
    return (
      <div><Navbar/>
      <div className="login-page">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button className='new but' type="submit"><Link to="/home">Login</Link></button>
        </form>
        <div className="small-text">
          <p><a href="/create-account">Create new account</a></p>
          <p><a href="/forgot-password">Forgot password</a></p>
          <p><a href="/forgot-username">Forgot username</a></p>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
