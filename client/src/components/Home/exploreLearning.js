import React from 'react';
import './exploreLearning.css';
import child_right from './child_right.jpg';

function ExploreLearning() {
    return (
        <div className="explore">
          <div className="heading-container "style={{ marginBottom: '0', marginTop: '10px' }}>
            <h3 className="explore-heading">Explore Learning</h3>
          </div>
          <div className="container">
            <div className="scrollable">
              <div className="item">
                <img src={child_right} alt="child rights" />
                <p>Text for Image 1</p>
              </div>
              <div className="item">
                <img src={child_right} alt="child rights" />
                <p>Text for Image 2</p>
              </div>
              <div className="item">
                <img src={child_right} alt="child rights" />
                <p>Text for Image 3</p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default ExploreLearning;
