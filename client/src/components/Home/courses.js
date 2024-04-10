import React from "react";
import "./courses.css";
import Learn from '../LandingPage/images/Learn.png';
import Watch from '../LandingPage/images/watch.jpg';
import Play from '../LandingPage/images/play.jpg';

const CourseComponent = () => {
  return (
    <div className="course-container">
      <h2>Our Courses</h2>
      <div className="column-container">
        <div className="column">
          <img src={Learn} alt='img1' />
          <h4>Learn</h4>
          <ul>
            <li><p>Rights</p></li>
            <li><p>Law Insight</p></li>
            <li><p>Disciplinary</p></li>
            <button className="custom-button3" onClick={() => { window.location.href = '/learn/rights'; }}>Start</button>
          </ul>
        </div>
        <div className="column">
          <img src={Play} alt='img2' />
          <h4>Play</h4>
          <ul>
            <li><p>Decision Making</p></li>
            <li><p>Fast Learning</p></li>
            <li><p>Cognitive Development</p></li>
            {/* <li><p>bmdbmc</p></li> */}
            <button className="custom-button3" onClick={() => { window.location.href = '/play'; }}>Start</button>
          </ul>
        </div>
        <div className="column">
          <img src={Watch} alt='img2' />
          <h4>Watch</h4>
          <ul>
            <li><p>Imagination</p></li>
            <li><p>Memory Retension</p></li>
            <li><p>Enhance Understanding</p></li>
            <button className="custom-button3" onClick={() => { window.location.href = '/watch'; }}>Start</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
