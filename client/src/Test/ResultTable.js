import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";
import '../styles/Result.css';

export default function ResultTable() {
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

  return (
    <div>
      <div className="LeaderBoard"><center>LeaderBoard</center></div>
      <table className="table-main-result">
        
        <thead className="table-header50">
          <tr className="table-row50">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
          </tr>
        </thead>
        <tbody>
          {!data.length && <tr><td colSpan="3">No Data Found</td></tr>}
          {data.map((v, i) => (
            <tr className="table-body50" key={i}>
              <td>{v?.username || ""}</td>
              <td>{v?.attempts || 0}</td>
              <td>{v?.points || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
