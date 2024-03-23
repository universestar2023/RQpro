import React from 'react';
import Navbar1 from '../Home/navbar1'
import './parent.css';
import feed from './feedback.png';
import repo from './childreport.png';
import { Link } from "react-router-dom";

class Parent extends React.Component {
  render() {
    return (
      <div>
        <Navbar1 />
        <div className="page12">
          <div className="feedback">
            <h2>Feedback</h2>
            <img src={feed} className='feedimg' alt="Feedback" />
            <button className='one'>Give Feedback</button>
          </div>
          <div className="child-report">
            <h2>Child Report</h2>
            <img src={repo} className='repoimg' alt="Child Report" />
            <button className='one'>View Report</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Parent;
