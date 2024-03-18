import React from 'react';
import assessment1 from '../images/assessment1.jpg';
import assessment2 from '../images/assessment2.jpg';
import assessment3 from '../images/assessment3.jpg';
import assessment4 from '../images/assessment4.jpg';
import './AssessmentSection.css'; // Import CSS file


const AssessmentSection = () => {
    return (
      <section className="assessment-section">
        <h2>Assessment Feature</h2>
        <p>
        We offer a range of interactive learning modules, games, and stories to make legal education fun and accessible.
        </p>
        <div className="assessment-images">
          <div className="assessment-item">
            <img src={assessment1} alt="Assessment Image 1" />
            <h3>Memory Score</h3>
          </div>
          <div className="assessment-item">
            <img src={assessment2} alt="Assessment Image 2" />
            <h3>Quizzes</h3>
          </div>
          <div className="assessment-item">
            <img src={assessment3} alt="Assessment Image 3" />
            <h3>Challenges</h3>
          </div>
          <div className="assessment-item">
            <img src={assessment4} alt="Assessment Image 4" />
            <h3>Games</h3>
          </div>
        </div>
        <center><button className="custom-button">Get Started</button></center>
      </section>
    );
  };
  
  export default AssessmentSection;