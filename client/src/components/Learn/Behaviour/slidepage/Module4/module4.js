import React from "react";
import "./module4.css";
import Img1 from '../Module4/md41.jpg';
import Img2 from '../Module4/md42.jpg';
import Img3 from '../Module4/md43.jpg';

const Module4 = () => {
  return (
    <div className="page3">
        <h2>Not Making Fun of People</h2>
        <ul>
        <li>
        <p>
        Standing up against bullying and making positive choices with our words and actions helps create a more inclusive and respectful environment.
      </p>
      </li>
      </ul>
      <div id="carouselExampleIndicators3" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators3"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators3"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators3"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img1} className="d-block w-100" alt="..." />
      <p>Making fun of people can hurt their feelings</p>
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block w-100" alt="..." />
      <p>damage trust in relationships</p>
    </div>
    <div className="carousel-item">
      <img src={Img3} className="d-block w-100" alt="..." />
      <p>Supporting others makes people feel good and builds strong friendships</p>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators3"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators3"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
};

export default Module4;
