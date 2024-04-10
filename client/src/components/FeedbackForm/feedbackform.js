// import React from "react";
import Navbar1 from "../Home/navbar1";
import "./feedbackform.css";
import FeedbackImg from "../LandingPage/images/feedback.jpg";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const FeedbackForm = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5ft2uzs', 'template_frwmyqq', form.current, {
        publicKey: 'UYohnKVvHaNDrq9to',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsMessageSent(true); // Set state to true when message is sent
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <Navbar1/>
      <div className="box">
        <div className="container-main">
          <div className="image-main-container">
      <img src={FeedbackImg} className="feedback-img" />
      </div>
          <div className="form-main-container">
            <h2>
              <center>Feedback Form</center>
            </h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {isMessageSent && <div className="popup">Message sent!</div>} {/* Popup message */}
    </div>
    </div>
    </div>
    </div>
  );
};

export default FeedbackForm;
