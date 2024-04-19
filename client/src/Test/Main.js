import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import "../styles/Main.css";
import axios from "axios";

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/route/questions`
        );
        // console.log(process.env.REACT_APP_SERVER_HOSTNAME);
        // Handle successful response here if needed
        console.log("Data fetched successfully:", response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function to fetch data

    // Clean-up function (optional)
    return () => {
      // Any clean-up code here, if necessary
    };
  }, []);

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
    else{
        
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
          placeholder="Username*"
        />
      </form>
      </div>
      <div className="start-btn1">
        <div className="btn-quiz" onClick={() => window.history.back()}>
        <Link >
          Back
        </Link>
        </div>
        <div className="btn-quiz">
        <Link   to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
        </div>
        </div>
      
    </div>
  );
}
