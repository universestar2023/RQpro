import React from "react";
import "./ComponentLayout.css";

const ComponentLayout = () => {
  return (
   <div className="second">
     <div className="container">
      <h1 className="heading">Unlock Your Legal Knowledge</h1>
      <p className="text">
        Connect with our experts to enhance your legal literacy journey.
      </p>

      <div className="icons">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            class="bi bi-chat-left-text-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
          </svg>
          <h2 className="icon-heading">ChatBot</h2>
        </div>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            class="bi bi-people-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          </svg>
          <h2 className="icon-heading">Expert Talk</h2>
        </div>
      </div>

      <center>
        <a href="/signup" className="custom-button">
          Sign Up Now
        </a>
      </center>
    </div>
   </div>
  );
};

export default ComponentLayout;
