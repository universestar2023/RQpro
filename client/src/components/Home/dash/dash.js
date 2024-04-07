import React from 'react';
import im from './chatbot.png'
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="profile-info">
        <img src={im} alt="Profile" />
        {/* <h2>{`${jdsfk} ${sdfd}`}</h2> */}
        <div className="progress-bars">
          <div className="progress-bar">
            <p>Completed Courses</p>
            <progress value={5} max="10"></progress>
          </div>
          <div className="progress-bar">
            <p>Enrolled Courses</p>
            <progress value={5} max="10"></progress>
          </div>
        </div>
      </div>
      <div className="current-course">
        <h3>Current Course:</h3>
        <p>{98}</p>
      </div>
    </div>
  );
};

export default Dashboard;
