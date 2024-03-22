// AboutUs.js

import React from 'react';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <h3>Our Vision</h3>
      <p>At RightsQuest, we envision a world where every child has access to legal education that empowers them to know and defend their rights. We believe that education is a fundamental right and that it should
        be accessible to all children, regardless of their background. Our platform is designed to create an engaging and effective learning experience that inspires children to become informed and active citizens. 
        Through our passion for education and commitment to excellence, we strive to make a positive impact on the world, one child at a time.
      </p>
      <div className='email'>
      <p> Let's talk </p>
      <p><a>contact@domain.com</a></p>
      </div>
      <h3>Team Story</h3>
      <p>At RightsQuest, we are passionate about empowering children through legal education. Our team of experts in education, law and technology has come together to create an engaging and effective e-learning platform.
        Our child-centric approach ensures that our lessons are interactive, informative and fun. We believe that every child has the right to know their rights, and we strive to make this education accessible to all.
        Join us our mission to create a more informed and empowered.
      </p>
    </div>
  );
}

export default AboutUs;
