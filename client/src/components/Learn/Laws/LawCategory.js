import React from "react";
import { Link } from "react-router-dom";
import './LawCategory.css';
import juvenileJustice from './images/juvenileJustice.png'
import civillaw from './images/civil-right.png'
import constitutionLaw from './images/constitution.png'
import familyLaw from './images/family-law.png'
import edulaw from './images/law.png'
import cyberLaw from './images/cyber-law.png'
import childlabour from './images/labour-law.png'
import criminal from './images/criminal-law.png'
import Navbar1 from "../../Home/navbar1";


const LawsComponent = () => {
  return (
    <>
    <Navbar1/>
      <div className="law-main">
        <div>
          <h1 className="lhead-law">
            <div className="first-tt">Laws Around Us: </div>A Playful Journey into{" "}
            <div className="sec-tt">Rules</div> and{" "}
            <div className="third-tt">Regulations</div>
          </h1>
        </div>
        <div className="page-law">
          <div className="top-law">
            <Link to="/juvenileJustice" className="sub-circles-law" style={{ backgroundColor: "pink", textDecoration:"none" }}>
              <div className="Title-law">Juvenile Justice Law</div>
              <p>Giving Children a Second Chance</p>
              <img src={juvenileJustice} alt="" />
              <button>know More</button>
            </Link>
            <Link to="/civilLaw" className="sub-circles-law" style={{ backgroundColor: "rgb(135, 212, 222)", textDecoration:"none"}}>
              <div className="Title-law ">Civil Law</div>
              <p>Adventures in Civil Law: Your Rights and Responsibilities</p>
              <img src={civillaw} alt="" />
              <button>know More</button>
            </Link>
            <Link to="/constitutionLaw" className="sub-circles-law" style={{ backgroundColor: "lightgreen" , textDecoration:"none"}}>
              <div className="Title-law  ">Constitution Law</div>
              <p>Discovering the Constitution: Your Rights as a Citizen</p>
              <img src={constitutionLaw} alt="" />
              <button>know More</button>
            </Link>
            <Link to="/familyLaw" className="sub-circles-law" style={{ backgroundColor: "lightblue", textDecoration:"none" }}>
              <div className="Title-law ">Family Law</div>
              <p>Navigating Relationships and Responsibilities</p>
              <img src={familyLaw} alt="" />
              <button>know More</button>
            </Link>
          </div>
          <div className="bottom-law">
            <Link to="/cyberLaw" className="sub-circles-law" style={{ backgroundColor: "lightcoral", textDecoration:"none" }}>
              <div className="Title-law ">Cyber Law</div>
              <p>Exploring Laws in the Digital World</p>
              <img src={cyberLaw} alt="" />
              <button>know More</button>
              
            </Link>
            <Link to="/educationLaw" className="sub-circles-law" style={{ backgroundColor: "yellow" , textDecoration:"none"}}>
              <div className="Title-law ">Education Law</div>
              <p> Every Child's Ticket to School</p>
              <img src={edulaw} alt="" />
              <button>know More</button>
            </Link>
            <Link to="/childLabourLaw" className="sub-circles-law" style={{ backgroundColor: "orange", textDecoration:"none" }}>
              <div className="Title-law ">Child Labour Law</div>
              <p> Protecting Children from Work</p>
              <img src={childlabour} alt="" />
              <button>know More</button>
            </Link>
            <Link to="/criminalLaw" className="sub-circles-law" style={{ backgroundColor: "cyan", textDecoration:"none" }}>
              <div className="Title-law ">Criminal Law</div>
              <p>Exploring the World of Criminal Justice</p>
              <img src={criminal} alt="" />
              <button>know More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LawsComponent;
