import React from "react";
import "./exploreLearning.css";
import Rights1 from "../LandingPage/images/rights1.jpg";
import Rights2 from "../LandingPage/images/rights2.jpg";
import Rights3 from "../LandingPage/images/rights3.jpg";
import Rights4 from "../LandingPage/images/rights4.jpg";
import { Link } from "react-router-dom";

function ExploreLearning() {
  return (
    <div className="explore">
      <div
        className="heading-container "
        
      >
        <h3 className="explore-heading">Explore Learning</h3>
      </div>
      <div className="container-explore">
        <div className="scrollable">
          <div className="item">
            <img src={Rights1} alt="child rights" />
            <h5>Right to Protection</h5>
            <center>
            <Link to='/learn/rights'><button className="custom-button">Learn</button></Link>
            </center>
          </div>
          <div className="item">
            <img src={Rights2} alt="child rights" />
            <h5>Right to Education</h5>
            <center>
            <Link to='/learn/rights'><button className="custom-button">Learn</button></Link>
            </center>
          </div>
          <div className="item">
            <img src={Rights3} alt="child rights" />
            <h5>Right to Non-Discrimination</h5>
            <center>
            <Link to='/learn/rights'><button className="custom-button">Learn</button></Link>
            </center>
          </div>
          <div className="item">
            <img src={Rights4} alt="child rights" />
            <h5>Right to Health</h5>
            <center>
            <Link to='/learn/rights'><button className="custom-button">Learn</button></Link>
            </center>
          </div>
        </div>
      </div>

      <div className="small-rectangle-box">
        <div className="small-rectangle-box2">
        <button className="btn-chatbot">
        
              <Link to="/chatbot">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="currentColor"
            class="bi bi-wechat"
            viewBox="0 0 16 16"
          >
            <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356" />
            <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0" />
          </svg>
          ChatBot
          </Link>
            </button>
        </div>
      </div>

    </div>
  );
}

export default ExploreLearning;
