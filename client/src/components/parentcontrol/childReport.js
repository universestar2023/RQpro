import React from 'react';
import './childReport.css';
import { useEffect,useState } from 'react';
import { getServerData } from '../../helper/helper';
import Navbar1 from '../Home/navbar1.js';
import FooterHomePage from '../Home/footerHome.js';

export default function ChildReport() {
 
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

    data.forEach((v) => {
      totalPoints += v.points || 0;
    });

    return totalPoints;
  };

  return (
    <>
    <div>
    <Navbar1/>
    
    <div className="child-report-page">
      <h2>LeaderBoard</h2>
      <div>
      <table className="table-main-result2">
        <thead className="table-header502">
          <tr className="table-row502">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
          </tr>
        </thead>
        <tbody>
          {!data.length && <tr><td colSpan="3">No Data Found</td></tr>}
          {data.map((v, i) => (
            <tr className="table-body502" key={i}>
              <td>{v?.username || ""}</td>
              <td>{v?.attempts || 0}</td>
              <td>{v?.points || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        <div className="report-btn">
      <button onClick={() => window.history.back()}>Back</button>
    </div>
    </div>
   <FooterHomePage/>
    </div>
    </>
  );
}
