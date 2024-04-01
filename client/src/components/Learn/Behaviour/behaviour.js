import React from "react";
import Navbar1 from "../../Home/navbar1";
import './behavior.css';
import Md1 from "./Images/bhv1.png";
import Md2 from "./Images/bhv2.png";
import { Link } from "react-router-dom";

const Behaviour = () => {
    return (
      <div>
        <Navbar1 />
        <h1 style={{textAlign: "center"}}>Behaviour</h1>
        <div className="page123">
          <div className="mdl1">
            <h2>Module 1</h2>
            <img src={Md1} className='mdl1img' alt="module1" />
            <button className='one1'><Link to='/combineSlidePage'>Start</Link></button>
          </div>
          <div className="mdl2">
            <h2>Module 2</h2>
            <img src={Md2} className='mdl2img' alt="module2" />
            <button className='one1'><Link to='/dropDown'>Start</Link></button>
          </div>
        </div>
      </div>
    );
  };


export default Behaviour;
