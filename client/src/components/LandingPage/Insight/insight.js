import React from "react";
import "./insight.css";
import childLabour from '../images/childLabour.jpg';
import childtrafficking from '../images/childtrafficking.jpg';
import childExploitation from '../images/childExploitation.jpg';
const InsightComponent = () => {
  return (
    <div className="insight-component">
      <h2>Insights</h2>
      <div className="grid-container">
        <div className="item2">
          <h3>Child Labour</h3>
          <p>
            Slavery work done by the children in order to produce goods and
            services
          </p>
          <button>Discover More</button>
        </div>
        <div className="grid-item">
          <img src={childLabour} alt="child Labour" />
        </div>

        <div className="grid-item">
          <img src={childtrafficking} alt="child Trafficking" />
        </div>
        <div className="item2">
          <h3>Child Trafficking</h3>
          <p>
            Child trafficking is the illegal activity of buying, stealing,
            moving or selling children for the purpose of exploitation.
          </p>
          <button>Discover More</button>
        </div>
        <div className="item2">
          <h3>Children exploitation</h3>
          <p>
            Child exploitation is when someone uses a child for financial gain,
            sexual gratification, labour or personal advantage.
          </p>
          <button>Discover More</button>
        </div>
        <div className="grid-item">
          <img src={childExploitation} alt="child Exploitation" />
        </div>
      </div>
    </div>
  );
};

export default InsightComponent;
