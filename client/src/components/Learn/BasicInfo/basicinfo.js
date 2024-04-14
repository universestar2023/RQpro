import React from "react";
import Navbar1 from "../../Home/navbar1";
import './basicinfo.css';
import img1 from "./Images/NA2.jpg";
import img2 from "./Images/PL.png";
import img3 from "./Images/PR.jpg";
import img4 from "./Images/song.webp";
import { Link } from "react-router-dom";

const BasicInfo = () => {
    return (
      <div>
      <Navbar1 />
      <h1 style={{textAlign: "center", marginTop: "20px"}}>Basic Information</h1>
      <div className="basicInfo-container">
        {/* Row 1 */}
        <div className="rower-BI">
            <div className="card1er-BI">
              {/* Card content */}
              <img src={img1} alt="Image 1" style={{ height: "193px" }} /> {/* Image space */}
              <h3> National Anthem</h3>
                <button><Link to='/natinal_anthem'>Start</Link></button>
          </div>
          {/* Column 2 */}
            <div className="card1er-BI">
              {/* Card content */}
              <img src={img2} alt="Image 2" /> {/* Image space */}
              <h3>Pledge</h3>
                <button><Link to='/pledge'>Start</Link></button>
          </div>
            <div className="card1er-BI">
              {/* Card content */}
              <img src={img3} alt="Image 3"  style={{ height: "193px" }}/> {/* Image space */}
              <h3>Preamble</h3>
                <button><Link to='/preamble'>Start</Link></button>
              {/* Button below the card */}
            </div>

            <div className="card1er-BI">
              {/* Card content */}
              <img src={img4} alt="Image 4" style={{ height: "193px" }} />
              <h3>Song</h3>
                <button><Link to='/song'>Start</Link></button>
            </div>
        </div>
    </div>
      </div> 
    );
  };


export default BasicInfo;
