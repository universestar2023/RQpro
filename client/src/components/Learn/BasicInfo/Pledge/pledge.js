import React from 'react';
import './pledge.css';
import NationalPledge from "./Pledge.png";

const Pledge = () => {
    return (
      <div className="container-P">
        <div className="PImage">
      <img src={NationalPledge} alt="Pledge" className="pledge-image" />
    </div>
    <table className="pledge-table">
    <thead>
          <tr>
            <th>Word</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rich</td>
            <td>Wealthy</td>
          </tr>
          <tr>
            <td>Heritage</td>
            <td>Culture of a country that have existed for a long time</td>
          </tr>
          <tr>
            <td>Strive</td>
            <td>Make great efforts to achieve something</td>
          </tr>
          <tr>
            <td>Worthy</td>
            <td>Good enough for something or to have something</td>
          </tr>
          <tr>
            <td>Courtesy</td>
            <td>Polite and pleasant behaviour that shows respect for other people</td>
          </tr>
          <tr>
            <td>Devotion</td>
            <td>Enthusiasm for person or an activity</td>
          </tr>
          <tr>
            <td>Wellbeing</td>
            <td>Healthy or happy</td>
          </tr>
          <tr>
            <td>Prosperity</td>
            <td>The state of being prosperous</td>
          </tr>
          </tbody>
    </table>
    <div className="Underbutton">
      <button onClick={() => window.history.back()}>Back</button>
    </div>
    </div>
  );
};

export default Pledge;
