import React from 'react';
import './freeSignUp.css'; 
import img1 from "../images/img1.jpg";

const FreeSignUp = () => {
  return (
    <div className="signup-container">
      <div className="image-container">
        <img src={img1} alt="Child" />
      </div>
      <div className="text-container">
        <p className="title">Explore our courses</p>
        <p className="bold-text">Unlock Your Legal Literacy</p>
        <p className="small-text">Signup for free and discover the world of legal education</p>
        <button className='custom-button'>Sign up for free</button>
      </div>
    </div>
  );
};

export default FreeSignUp;
