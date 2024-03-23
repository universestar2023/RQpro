import React from 'react';
import './exploreLearning.css';
import Rights1 from '../LandingPage/images/rights1.jpg';
import Rights2 from '../LandingPage/images/rights2.jpg';
import Rights3 from '../LandingPage/images/rights3.jpg';
import Rights4 from '../LandingPage/images/rights4.jpg';

function ExploreLearning() {
    return (
        <div className="explore">
          <div className="heading-container "style={{ marginBottom: '0', marginTop: '10px' }}>
            <h3 className="explore-heading">Explore Learning</h3>
          </div>
          <div className="container">
            <div className="scrollable">
              <div className="item">
                <img src={Rights1} alt="child rights" />
                <h5>Right to Protection</h5>
                <center><button className="custom-button2">Learn</button></center>
              </div>
              <div className="item">
                <img src={Rights2} alt="child rights" />
                <h5>Right to Education</h5>
                <center><button className="custom-button2">Learn</button></center>
              </div>
              <div className="item">
                <img src={Rights3} alt="child rights" />
                <h5>Right to Non-Discrimination</h5>
                <center><button className="custom-button2">Learn</button></center>
              </div>
              <div className="item">
                <img src={Rights4} alt="child rights" />
                <h5>Right to Heath</h5>
                <center><button className="custom-button2">Learn</button></center>
              </div>
            </div>
          </div>
        </div>
  );
}

export default ExploreLearning;
