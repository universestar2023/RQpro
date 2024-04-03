import React from "react";
import "./module3.css";
import Img1 from '../Module3/md31.jpg';
import Img2 from '../Module3/md32.jpg';
import Img3 from '../Module3/md33.jpg';

const Module3 = () => {
  return (
    <div className="page2">
        <h2>Showing Respect to Elders</h2>
        <ul>
        <li>
        <p>
        Respecting older people is important because they know a lot of things and have lived longer than us. 
      </p>
      </li>
      </ul>
      <div id="carouselExampleIndicators2" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators2"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators2"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators2"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img1} className="d-block w-100" alt="..." />
      <p>1. Helping elders to cross the road</p>
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block w-100" alt="..." />
      <p>2. giving them food</p>
    </div>
    <div className="carousel-item">
      <img src={Img3} className="d-block w-100" alt="..." />
      <p>3. Give the elders a seat to sit down comfortably</p>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators2"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators2"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
};

export default Module3;
