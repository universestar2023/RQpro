import React from 'react';
import Navbar1 from './navbar1.js';
import ExploreLearning from './exploreLearning.js';
import Overview from './overview.js';
import Footer from '../LandingPage/footer/footer.js';
import Courses from './courses.js';

function Home() {

  return (
    <div>
      
    <Navbar1/>
        <ExploreLearning/>
        <Overview/>
        <Courses/>
        <Footer/>
    </div>
  )
}

export default Home;
