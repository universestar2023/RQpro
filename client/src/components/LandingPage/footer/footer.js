import React from "react";
import "./footer.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

function Footer() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  };

  return (
    <footer className="footer">
      <div className="footer-center">
        <span className="navbar-toggler-icon">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-up-circle"
              viewBox="0 0 16 16"
              onClick={scrollToTop} // Add onClick event handler
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
              />
            </svg>
          </Link>
        </span>
        <p>
          <strong>About RightsQuest</strong>
        </p>

        <div className="dropdown">
         <button className="dropbtn">Languages</button>
          <div className="dropdown-content">
            <a href="#">English</a>
            <a href="#">Hindi</a>
            <a href="#">Marathi</a>
          </div>
        </div>
        <div className="footer-subtext">
          <p>
            <strong>Learn, Play, Empower</strong>
          </p>
          <p>
            <strong>Social connectivity</strong>
          </p>
        </div>
      </div>
      <div className="footer-left-small">
        <p>Home</p>
        <p>Courses</p>
        <p>About us</p>
        <p>Contact</p>
      </div>
      <div className="footer-right-small">
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Linkdin</p>
        <p>Instagram</p>
      </div>
      <div className="footer-center">
        <div className="footer-subtext">
          <p>
            <strong>Our Integrations</strong>
          </p>
          <p>
            <strong>Legal Resources</strong>
          </p>
        </div>
      </div>
      <div className="footer-left-small">
        <p>Storytelling</p>
        <p>games</p>
      </div>
      <div className="footer-right-small">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="footer-center">
        <p>&#169;All Rights are Reserverd</p>
      </div>
    </footer>
  );
}

export default Footer;
