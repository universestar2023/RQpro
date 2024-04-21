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
      <div className="boxer">
        <div className="container-mainer">
          <div className="image-main-containerer">
      <img src={FeedbackImg} className="feedback-imger" />
      </div>
          <div className="form-main-containerer">
            <h2 className="feedhead">
              Feedback Form
            </h2>
      <form className="former" ref={form} onSubmit={sendEmail}>
        <label className="hello">Name</label>
        <input type="texte" name="user_name" />
        <label className="hello">Email</label>
        <input  type="emaile" name="user_email" />
        <label className="hello">Message</label>
        <textarea  name="message" />
        <input  type="submit" value="Send" />
      </form>
      {isMessageSent && <div className="popuper">Message sent!</div>} {/* Popup message */}
    </div>
    </div>
    </div>
    </div>
  );
};

export default FeedbackForm;
