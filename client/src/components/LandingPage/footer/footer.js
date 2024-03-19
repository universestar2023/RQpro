import React from 'react';
import './footer.css'; // Import CSS file for styling

class Footer extends React.Component {
  render() {
    return (
        <footer className="footer">
      <div className="footer-center">
        <p><strong>About RightsQuest</strong></p>
        <div className="dropdown">
          <button className="dropbtn">Languages</button>
          <div className="dropdown-content">
            <a href="#">English</a>
            <a href="#">Hindi</a>
            <a href="#">Marathi</a>
          </div>
        </div>
        <div className="footer-subtext">
          <p><strong>Learn, Play, Empower</strong></p>
          <p><strong>Social connectivity</strong></p>
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
          <p><strong>Our Integrations</strong></p>
          <p><strong>Legal Resources</strong></p>
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
}

export default Footer;
