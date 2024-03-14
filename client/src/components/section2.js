import React from "react";
import "./section2.css";


class Section extends React.Component {
  // state = {  }
  render() {
    return (
      <div>
        <section className="container mt-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* Information content goes here */}
              <h2 className="head">Explore Our Courses</h2>
              <p className="section-paragraph">
               Interactive Learning Modules<br /> Discover how our courses can empower you with legal knowledge<br/>
               <h4>Discover the world of legal literacy.</h4>
              </p>
              <button className="custom-button">Start Learning</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Section;
