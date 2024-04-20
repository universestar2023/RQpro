import React, { useEffect, useState } from "react";
import { getServerData } from "../../../helper/helper";
import "../../../styles/Result.css";
import dashimg from './chatbot.png';
import './dash.css';


import profile from "./profile.png";

import Navbar1 from "../../Home/navbar1.js";
import FooterHomePage from "../../Home/footerHome.js";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/route/result`,
      (res) => {
        // Filter out duplicate usernames
      const uniqueData = res.reduce((acc, current) => {
        const existingUser = acc.find(user => user.username === current.username);
        if (!existingUser) {
          acc.push(current);
        }
        return acc;
      }, []);
      setData(uniqueData);

      }
    );
  }, []);
  const calEarnPoints = (data) => {
    if (!data || !Array.isArray(data)) {
      return 0; // Return 0 if data is undefined or not an array
    }
  
    let totalPoints = 0;
  
    data.map((v) => {
      totalPoints += v.points || 0;
    });
  
    return totalPoints;
  };
  
  
  return (
    <>
    <Navbar1/>
    <div className="dashboard-container">
      {/* User Profile */}
      <div className="user-profile">
        <h1>Welcome to the Dashboard</h1>
        </div>
        <div className="user-dash-hor">
        <div className="user-image">
         <img src={dashimg} alt="User" 
         width="350px"
         /> 
      </div>
        <div className="main-dash-info">
        <div className="profile-image">
         <img className="profile-pic-dash" src={profile} alt="User"/> 
      </div>
        
          <div className="info-dash">
          <p> John Doe</p>
          <p>Current Score:{calEarnPoints(data)}</p>
          </div>
          </div>
          
      
        </div>
       
</div>
<div>
      <table className="table-main-result ">
        <thead className="table-header50">
          <tr className="table-row50">
            <td>Name</td>
            <td>Attemps</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {!data ?? <div>No Data Found </div>}
          {data.map((v, i) => (
            <tr className="table-body50" key={i}>
              <td>{v?.username || ""}</td>
              <td>{v?.attempts || 0}</td>
              <td>{v?.points || 0}</td>
              <td>{v?.achived || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div>
    <FooterHomePage/>
    </div>
    </>

  );
}