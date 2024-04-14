// import React, { useState, useEffect } from "react";
// import axios from "axios"; // You may use any HTTP client library like Axios or Fetch

// const Dashboard = () => {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/home"); // Assuming your server exposes an API endpoint to fetch user data
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to the Dashboard</h1>
//       <div>
//         <h2>User Information:</h2>
//         <p>First Name: {userData.firstName}</p>
//         <p>Last Name: {userData.lastName}</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
