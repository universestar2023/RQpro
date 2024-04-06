import React from "react";
import "./navbar1.css";
import logo from '../LandingPage/images/logo.png';
import { Link } from "react-router-dom";
import LearnSection from "../Learn/learn";


const Navbar1 = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	}; 

    return (
      <nav className="navbar navbar-expand-lg ">
        <img src={logo} alt="Logo" className="navbar-brand navbar-logo" />{" "}
        {/* Logo */}
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
                <Link to="/home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="white"
                class="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
              Home</Link>
            </li>
            <li className="nav-item">
              <LearnSection/>
            </li>
            <li className="nav-item">
              <Link to='/play'>
              <a className="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  class="bi bi-play-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
                Play
              </a>
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/watch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="white"
                class="bi bi-play-btn-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
              </svg>
              Watch</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to= '/aboutus'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="white"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
                About Us</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to='/contact' >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="white"
                  class="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                </svg>
                Contact</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/parent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="white"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
                Parental Control</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <button onClick={handleLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="white"
                  class="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
                Log out</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  
}

export default Navbar1;
