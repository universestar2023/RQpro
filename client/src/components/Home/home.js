import React from 'react';
import Navbar1 from './navbar1.js';
import ExploreLearning from './exploreLearning.js';
import Overview from './overview.js';
import FooterHomePage from './footerHome.js';
import Courses from './courses.js';

function Home() {

  return (
    <div>
        <Navbar1/>
        <ExploreLearning/>
        <Overview/>
        <Courses/>
        <FooterHomePage/>
    </div>
  )
}

export default Home;
