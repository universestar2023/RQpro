import React from "react";
import "./module2.css";
import Img1 from "./md21.jpg";
import Img2 from "./md22.jpg";
import Img3 from "./md23.jpg";
import Img4 from "./md24.jpg";

const Module2 = () => {
  return (
    <div className="page">
        <h2>Learning to Share</h2>
        <ul>
        <li>
        <p>
        Sharing toys with friends makes everyone happy.
      </p>
      </li>
      </ul>
      <div id="carouselExampleIndicators1" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators1"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators1"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators1"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators1"
      data-bs-slide-to={3}
      className="active"
      aria-current="true"
      aria-label="Slide 4"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img1} className="d-block w-100" alt="..." />
      <p>1. When we don't share things with others</p>
    </div>
    <div className="carousel-item">
      <img src={Img4} className="d-block w-100" alt="..." />
      <p>2. It can make them feel left out or unhappy</p>
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block w-100" alt="..." />
      <p>Sharing things with each other promotes happiness </p>
    </div>
    <div className="carousel-item">
      <img src={Img3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators1"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators1"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
};

export default Module2;
