import React from "react";
import "./insight.css";
import childLabour from '../images/childl.png';
import childtrafficking from '../images/childt.png';
import childExploitation from '../images/childe.png';
const InsightComponent = () => {
  return (
    <div className="insight-component">
      <h2>Insights</h2>
      <div className="grid-cont">
        <div className="item-insight">
          <h3>Child Labour</h3>
          <p>
            Slavery work done by the children in order to produce goods and
            services
          </p>
          <button className="custom-button" onClick={() => { window.location.href = '/signup'; }}>Discover More</button>
        </div>
        <div className="grid-item-insight">
          <img src={childLabour} alt="child Labour" />
        </div>

        <div className="grid-item-insight">
          <img src={childtrafficking} alt="child Trafficking" />
        </div>
        <div className="item-insight">
          <h3>Child Trafficking</h3>
          <p>
            Child trafficking is the illegal activity of buying, stealing,
            moving or selling children for the purpose of exploitation.
          </p>
          <button className="custom-button" onClick={() => { window.location.href = '/signup'; }}>Discover More</button>
        </div>
        <div className="item-insight">
          <h3>Children exploitation</h3>
          <p>
            Child exploitation is when someone uses a child for financial gain,
            sexual gratification, labour or personal advantage.
          </p>
          <button className="custom-button" onClick={() => { window.location.href = '/signup'; }}>Discover More</button>
        </div>
        <div className="grid-item-insight">
          <img src={childExploitation} alt="child Exploitation" />
        </div>
      </div>
    </div>
  );
};

export default InsightComponent;
