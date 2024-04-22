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
        const updatedData = res.reduce((acc, current) => {
          const existingUserIndex = acc.findIndex(user => user.username === current.username);
          if (existingUserIndex !== -1) {
            // Update existing entry
            acc[existingUserIndex] = {
              ...acc[existingUserIndex],
              attempts: current.attempts, // Update attempts with new value
              points: acc[existingUserIndex].points + current.points
            };
          } else {
            // Add new entry
            acc.push(current);
          }
          return acc;
        }, []);

        // Sort data based on earned points in descending order
        const sortedData = updatedData.sort((a, b) => b.points - a.points);

        setData(sortedData);
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
       
      
        <div className="main-dash-info">
        <div className="profile-image">
         <img className="profile-pic-dash" src={profile} alt="User"/> 
      </div>
        
          <div className="info-dash">
          <p> John Doe</p>
          <p>Current Score:100</p>
          </div>
          </div>
          
      
        </div>
       
</div>
 <div>
      <div className="LeaderBoard22"><center>LeaderBoard</center></div>
      <table className="table-main-result22">
        
        <thead className="table-header5022">
          <tr className="table-row5022">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
          </tr>
        </thead>
        <tbody>
          {!data.length && <tr><td colSpan="3">No Data Found</td></tr>}
          {data.map((v, i) => (
            <tr className="table-body5022" key={i}>
              <td>{v?.username || ""}</td>
              <td>{v?.attempts || 0}</td>
              <td>{v?.points || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <div className="back-dashb">
     <center> <button onClick={() => window.history.back()}>Back</button></center>
    </div>
   
    

    </>

  );
}