import React from 'react';
import Rights from '../LandingPage/images/right.png';
import Laws from '../LandingPage/images/laws.png';
import Behavior from '../LandingPage/images/behavior.png';
import Conduct from '../LandingPage/images/conduct.png';
import './overview.css'; // Import CSS file
import { Link } from "react-router-dom";



const Overview = () => {
    return (
      <section className="assessment-section1">
        <h3>OVERVIEW</h3>
        <div className="assessment-images1">
          <div className="assessment-item1">
          <div className="assessment-content1">
            <img src={Rights} alt="Assessment Image 1" />
            <p>Rights</p>
          </div>
            <Link to='/learn/rights'><center><button className="custom-button1">Start</button></center></Link>
          </div>
          <div className="assessment-item1">
          <div className="assessment-content1">
            <img src={Laws} alt="Assessment Image 2" />
            <p>Laws</p>
            </div>
            <Link to='/learn/LawCategory'><center><button className="custom-button1">Start</button></center></Link>
          </div>
          <div className="assessment-item1">
          <div className="assessment-content1">
            <img src={Behavior} alt="Assessment Image 3" />
            <p>Behaviour</p>
            </div>
            <Link to='/learn/behaviour'><center><button className="custom-button1">Start</button></center></Link>
          </div>
          <div className="assessment-item1">
          <div className="assessment-content1">
            <img src={Conduct} alt="Assessment Image 4" />
            <p>Conduct</p>
            </div>
            <Link to='/learn/conduct'><center><button className="custom-button1">Start</button></center></Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default Overview;