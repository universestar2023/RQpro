import React from 'react';
import Rights from '../LandingPage/images/right.png';
import Laws from '../LandingPage/images/laws.png';
import Behavior from '../LandingPage/images/behavior.png';
import Conduct from '../LandingPage/images/conduct.png';
import './overview.css'; // Import CSS file


const Overview = () => {
    return (
      <section className="assessment-section">
        <h3>OVERVIEW</h3>
        <div className="assessment-images">
          <div className="assessment-item">
          <div className="assessment-content">
            <img src={Rights} alt="Assessment Image 1" />
            <p>Rights</p>
          </div>
            <center><button className="custom-button">Start</button></center>
          </div>
          <div className="assessment-item">
          <div className="assessment-content">
            <img src={Laws} alt="Assessment Image 2" />
            <p>Laws</p>
            </div>
            <center><button className="custom-button">Start</button></center>
          </div>
          <div className="assessment-item">
          <div className="assessment-content">
            <img src={Behavior} alt="Assessment Image 3" />
            <p>Behavior</p>
            </div>
            <center><button className="custom-button">Start</button></center>
          </div>
          <div className="assessment-item">
          <div className="assessment-content">
            <img src={Conduct} alt="Assessment Image 4" />
            <p>Conduct</p>
            </div>
            <center><button className="custom-button">Start</button></center>
          </div>
        </div>
      </section>
    );
  };
  
  export default Overview;