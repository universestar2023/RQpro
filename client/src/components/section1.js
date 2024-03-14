import React from "react";
import "./section1.css";
import labor from "./labor.jpg";

class Section extends React.Component {
  // state = {  }
  render() {
    return (
      <div>
        <section className="container mt-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* Information content goes here */}
              <h2 className="head">Welcome!</h2>
              <p className="section-paragraph">
                RightsQuest is an interactive e-learning platform that educates
                children about their legal rights. <br /> Start your journey
                with us today.
              </p>
              <button className="custom-button">Sign Up</button>
            </div>
            <div className="col-md-6 text-center">
              <img src={labor} alt="Labor" className="section-brand section-img" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Section;
