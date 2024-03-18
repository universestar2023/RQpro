import React from 'react';
import assessmentImage1 from './components/images/assessment1.jpg'// Import your assessment images
import assessmentImage2 from './components/images/assessment2.jpg';
import assessmentImage3 from './components/images/assessment3.jpg';
import assessmentImage4 from './components/images/assessment4.jpg';
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
            <img src={assessmentImage1} alt="Assessment Image 1" />
            <h3>Memory Score</h3>
          </div>
          <div className="assessment-item">
            <img src={assessmentImage2} alt="Assessment Image 2" />
            <h3>Quizzes</h3>
          </div>
          <div className="assessment-item">
            <img src={assessmentImage3} alt="Assessment Image 3" />
            <h3>Challenges</h3>
          </div>
          <div className="assessment-item">
            <img src={assessmentImage4} alt="Assessment Image 4" />
            <h3>Games</h3>
          </div>
        </div>
        <center><button className="custom-button">Get Started</button></center>
      </section>
    );
  };
  
  export default AssessmentSection;