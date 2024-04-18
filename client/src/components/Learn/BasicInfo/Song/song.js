import React from "react";
import "./song.css";
import Img1 from "./vande.jpg";
import Img2 from "./song.png";


const Preamble = () => {
  return (
    <div className="container-pre">
      <div className="UnderImgpre">
        <img src={Img1} alt="song" className="song-image" />
        <img src={Img2} alt="song1" className="song1-image" />
        
      </div><br/>
      <div className="UnderTablepre">
        <h3>Translation of National Song</h3>
        <table className="pre-table">
          <p>
            “Mother, I bow to thee! Rich with thy hurrying streams, bright with
            orchard gleams, Cool with thy winds of delight, Dark fields waving
            Mother of might, Mother free. Glory of moonlight dreams, Over thy
            branches and lordly streams, Clad in thy blossoming trees, Mother,
            giver of ease Laughing low and sweet! Mother I kiss thy feet,
            Speaker sweet and low! Mother, to thee I bow.”
          </p>
        </table>
      </div>
      <div className="Underbtn2">
        <button onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default Preamble;
