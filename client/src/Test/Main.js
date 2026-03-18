import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import "../styles/Main.css";
import axios from "axios";

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [error,setError]=useState(false)
  const [loggedInFirstName, setLoggedInFirstName] = useState(""); // State to store the logged-in user's first name

  //Questions are stored only once
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         `${process.env.REACT_APP_SERVER_HOSTNAME}/api/route/questions`
  //       );
  //       // console.log(process.env.REACT_APP_SERVER_HOSTNAME);
  //       // Handle successful response here if needed
  //       console.log("Data stored successfully:", response.data);
  //     } catch (error) {
  //       // Handle error
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData(); // Call the async function to fetch data

  //   // Clean-up function (optional)
  //   return () => {
  //     // Any clean-up code here, if necessary
  //   };
  // }, []);
  // Fetch the logged-in user's first name when the component mounts
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const token = localStorage.getItem("token");
        
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/users/getUser`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
          }
        );
        setLoggedInFirstName(response.data.firstName); // Assuming the API returns { firstName: "John" }
      } catch (error) {
        console.error("Error fetching logged-in user:", error);
      }
    };

    fetchLoggedInUser();
  }, []);

  
  function startQuiz() {
    const enteredFirstName = inputRef.current?.value.trim(); // Trim whitespace and convert to lowercase
    const loggedInName = loggedInFirstName?.toLowerCase().trim(); // Convert logged-in name to lowercase

    console.log("Entered First Name:", enteredFirstName);
    console.log("Logged-In First Name:", loggedInName);

    if (!enteredFirstName) {
      setError("Please enter your FirstName");
    } else if (!loggedInFirstName) {
      setError("Logged-in user data is not available. Please try again.");
    } else if (enteredName.trim().toLowerCase() !== loggedInName.trim().toLowerCase()) {
      setError("Entered FirstName does not match the logged-in user");
    } else {
      dispatch(setUserId(enteredFirstName)); // Save the user's first name in Redux
      navigate("/test/quiz"); // Navigate to the quiz page
    }
  }

  return (
    <div className="container-quiz">
      <h1 className="title50">Quiz Time</h1>

      <div className="list-container">
      <ol class="custom-ol">
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three options. You can choose only one option.
        </li>
        <li>You can review and change answers before you finish the quiz.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      </div>

      <div id="myform">
      <form >
        <input
          ref={inputRef}
          className="userid-pro"
          type="text"
          placeholder="Enter your Firstname.."
          required
        />
        {error && 
        <div className="error-message" >
          {error}
        </div>
        }
      </form>
      </div>
      <div className="start-btn1">
        <div className="btn-quiz" onClick={() => window.history.back()}>
        <div >
          Back
        </div>
        </div>
        <div className="btn-quiz">
        <div onClick={startQuiz}>
          Start Quiz
        </div>
        </div>
        </div>
      
    </div>
  );
}
