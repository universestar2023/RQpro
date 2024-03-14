import React from "react";
import "./section1.css";
// import labor from "./labor.jpg";
class Section extends React.Component {
  // state = {  }
  render() {
    return (
      <div>
        
        <section className="container mt-4">
          <div className="row">
            <div className="col">
              {/* Information content goes here */}
              <h2>Welcome!</h2>
              <p>RightsQuest is an interactive e-learning platfrom that educates children about their legal rights.
                <br/>Start your journey with us today.</p>
            </div>
          </div>
          <button className="custom-button">Sign Up</button>
        {/* <img src={labor} alt="Labor" className="section-brand section-img" />  */}

        </section>
      </div>
    );
  }
}

export default Section;
