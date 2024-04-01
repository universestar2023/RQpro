import React from "react";
import Navbar1 from "../Home/navbar1";
import "./feedbackform.css";
import FeedbackImg from "../LandingPage/images/feedback.jpg";

const FeedbackForm = () => {
  return (
    <div>
      <Navbar1 />
      <div className="box">
        <div className="container-main">
          <div className="image-main-container">
            <img src={FeedbackImg} alt="Sample" />
          </div>
          <div className="form-main-container">
            <h2>
              <center>Feedback Form</center>
            </h2>
            <div className="form-header1"  style={{ textAlign: 'center' }} >
              <p style={{ textDecoration: 'underline' }}>Connect with us:</p>
              <p>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                contact@domain.com
              </a>
              </p>
            </div>
            <form>
              <div className="feedback-text-main">
                <p style={{ textAlign: 'left' }}>
                  Please take a moment to provide feedback about your child's
                  progress and experiences to help us better support their
                  growth and development.
                </p>
                <textarea placeholder="Your feedback"></textarea>
              </div>
              <div className="btn-feedback">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
