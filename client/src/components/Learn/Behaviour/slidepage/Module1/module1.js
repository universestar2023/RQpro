import React from "react";
import "./module1.css";
import Img1 from "./m11.jpg";
import Img2 from "./m12.jpg";
import Img3 from "./m1.jpg";


const Module1 = () => {
  return (
    <div className="page1">
        <h2>Covering One’s Mouth When Sneezing or Coughing</h2>
        <ul>
        <li>
        <p>
        It's important to cover your mouth when sneezing or coughing to prevent
        the spread of germs.
      </p>
      </li>
      </ul>
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img1} className="d-block w-100" alt="..." />
      <p>1. When you are sneezing or coughing</p>
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block w-100" alt="..." />
      <p>2. Hide your mouth with hanckerchief or tisssue</p>
    </div>
    <div className="carousel-item">
      <img src={Img3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
};

export default Module1;
