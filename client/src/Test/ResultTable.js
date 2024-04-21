import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";
import '../styles/Result.css';

export default function ResultTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(
      `https://rightsquest.onrender.com/api/route/result`,
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

  return (
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
  );
}
