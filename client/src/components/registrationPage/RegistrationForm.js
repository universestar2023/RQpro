// import React, { useState } from "react";
// // import axios from "axios";
// import "./registrationPage.css";
// import profile from "./profile.png";
// import { Link } from "react-router-dom";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     parentName: "",
//     mobileNo: "",
//     username: "",
//     password: "",
//     repeatPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to register");
//       }

//       const data = await response.json();
//       console.log(data);
//       // Handle successful registration
//     } catch (error) {
//       console.error("Error occurred during registration:", error.message);
//       // Handle registration error
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         maxWidth: "300px",
//         margin: "auto",
//       }}
//     >
//       <div className="sub-formCon">
//       <div className="profileImg">
//         <img src={profile} alt="" />
//       </div>
//       <h3>Register Now</h3>

//       <div
//         style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
//         className="register-form"
//       >
//         <div style={{ marginRight: "10px" }}>
//           <label>First Name:</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             autoComplete="given-name"
//           />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             autoComplete="family-name"
//           />
//         </div>
//       </div>
//       <div
//         style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
//       >
//         <div style={{ marginRight: "10px" }}>
//           <label>Parent Name:</label>
//           <input
//             type="text"
//             name="parentName"
//             value={formData.parentName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Mobile No:</label>
//           <input
//             type="text"
//             name="mobileNo"
//             value={formData.mobileNo}
//             onChange={handleChange}
//             required
//             autoComplete="tel"
//           />
//         </div>
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//           autoComplete="username"
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           autoComplete="new-password"
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label>Repeat Password:</label>
//         <input
//           type="password"
//           name="repeatPassword"
//           value={formData.repeatPassword}
//           onChange={handleChange}
//           required
//           autoComplete="new-password"
//         />
//       </div>
//       <button  className="button1" type="submit">SignUp</button>
//       <p>Already a member?<Link to="/login">Login</Link></p>
//       </div>
      
//     </form>
//   );
// };

// export default RegistrationForm;
