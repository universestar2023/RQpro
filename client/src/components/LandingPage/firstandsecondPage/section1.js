import React from "react";
import "./section1.css";
import kid from "../images/p.png";

class Section extends React.Component {
  render() {
    return (
      <div className="sec1">
        <section className="container1 col-md-8">
          <div className="row align-items-center" >
            <div className="col-md-6">
              {/* Information content goes here */}
              <h2 className="head">Welcome!</h2>
              <p className="secp">
                RightsQuest is an interactive e-learning platform that educates
                children about their legal rights. <br /> Start your journey
                with us today.
              </p>
              <button className="custom-button">Sign Up</button>
            </div>
            <div className="col-md-2 text-center">
              <img src={kid} alt="Kid" className="section-brand section-img" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Section;
