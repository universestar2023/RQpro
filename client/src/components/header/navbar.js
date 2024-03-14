import React from "react";
import "./navbar.css";
import logo from "./logo.png";

class Navbar extends React.Component {
  // state = {  }
  render() {
    return (
      <nav  className="navbar navbar-expand-lg ">
        <div className="container-fluid">
        <img src={logo} alt="Logo" className="navbar-brand navbar-logo" /> {/* Logo */}
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
                <a className="nav-link home-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Learn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Play
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Watch
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact Us 
                    </a>
                  </li>
                  {/* <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
