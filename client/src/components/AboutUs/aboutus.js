// AboutUs.js
import Navbar1 from '../Home/navbar1'; 
import React from 'react';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div>
      <Navbar1/>
    
    <div className="about-us-container">
      <h1>About Us</h1>
      <h3>Our Vision</h3>
      <p>At RightsQuest, we envision a world where every child has access to legal education that empowers them to know and defend their rights. We believe that education is a fundamental right and that it should
        be accessible to all children, regardless of their background. Our platform is designed to create an engaging and effective learning experience that inspires children to become informed and active citizens. 
        Through our passion for education and commitment to excellence, we strive to make a positive impact on the world, one child at a time.
      </p>
      <div className='email'>
      <p> Let's talk </p>
      <p><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>contact@domain.com</a></p>
      </div>
      <h3>Team Story</h3>
      <p>At RightsQuest, we are passionate about empowering children through legal education. Our team of experts in education, law and technology has come together to create an engaging and effective e-learning platform.
        Our child-centric approach ensures that our lessons are interactive, informative and fun. We believe that every child has the right to know their rights, and we strive to make this education accessible to all.
        Join us our mission to create a more informed and empowered.
      </p>
    </div>
    </div>
  );
}

export default AboutUs;
