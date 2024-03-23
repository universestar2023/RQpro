import React from 'react';
import './story.css'; 
import Navbar1 from '../Home/navbar1';

class VideoSection extends React.Component {
  render() {
    return (
        <div><Navbar1/>
      <div className="container3">
        <div className="video-section">
          <h2>Multiple Video Section</h2>
          <div className="video-card">
            {/* Video Card 1 */}
            <div className="card1">
              <iframe src="https://youtube.com/shorts/ntS3kt8MBwI?si=dx-y03HXZ432_Jyi" title="Video 1"></iframe>
              <div className="card-description">
                <p>Video 1 Description</p>
              </div>
            </div>
            {/* Video Card 2 */}
            <div className="card1">
              <iframe src="https://youtube.com/shorts/ntS3kt8MBwI?si=dx-y03HXZ432_Jyi"></iframe>
              <div className="card-description">
                <p>Video 2 Description</p>
              </div>
            </div>
            {/* Add more video cards as needed */}
          </div>
          <p className="section-text">Some text below the video section</p>
        </div>

        {/* Row 1 */}
        <div className="row">
          {/* Column 1 */}
          <div className="column">
            <div className="card1">
              {/* Card content */}
              <h3>Card 1</h3>
              <p>Card 1 Description</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="column">
            <div className="card1">
              {/* Card content */}
              <h3>Card 2</h3>
              <p>Card 2 Description</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          {/* Column 1 */}
          <div className="column">
            <div className="card1">
              {/* Card content */}
              <h3>Card 3</h3>
              <p>Card 3 Description</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="column">
            <div className="card1">
              {/* Card content */}
              <h3>Card 4</h3>
              <p>Card 4 Description</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default VideoSection;
