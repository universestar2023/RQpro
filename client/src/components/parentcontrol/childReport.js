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
    });
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
      <h2>Child Report</h2>
      {!data ?? <div>No Data Found </div>}
      
        <table className="table-main-result2">
          <thead className="table-header502">
            <tr className="table-row502">
              <th>Name</th>
              <th>Attempts</th>
              <th>Earn Points</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v, i) => (
              <tr className="table-body502" key={i}>
                <td>{v?.username || ''}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achived || " "}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2">Total Earn Points:</td>
              <td colSpan="2">{calEarnPoints(data)}</td>
            </tr>
          </tbody>
        </table>
        <div className="report-btn">
      <button onClick={() => window.history.back()}>Back</button>
    </div>
    </div>
   <FooterHomePage/>
    </div>
    </>
  );
}
