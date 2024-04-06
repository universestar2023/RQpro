import React from "react";
import "./navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../Home/home.js";
import Login from "../../Login/index.jsx";
import Signup from "../../Signup/index.jsx";

function Navbar(){
	const user = localStorage.getItem("token");


    return (
      <div>
        <Routes>
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/login" element={<Navigate replace to="/login" />} />
		</Routes>

      <nav  className="navbar navbar-expand-lg ">
        
        <Link to='/'><img src={logo} alt="Logo" className="navbar-brand navbar-logo" /> </Link>{/* Logo */}
          {/* <a className="navbar-brand" href="#">
            RightsQuest
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* <a className="nav-link home-link" aria-current="page" href="#">
                  Home
                </a> */}
                <Link to='/'>Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/login'>Learn</Link>

              </li>
              <li className="nav-item">
              <Link to='/login'>Play</Link>
              </li>
              <li className="nav-item">
              <Link to='/login'>Watch</Link>
              </li>
              <li className="nav-item dropdown">
              <Link to='/ab'>About</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to='/login'>Login</Link>
              </li>
              <li className="nav-item">

                {/* <a className="nav-link" href="#">
                  Sign Up
                </a> */}
                <Link to='/signup'>Signup</Link>

              

              </li>
            </ul>
          </div>
        
      </nav>
      </div>
    );
  }


export default Navbar;
