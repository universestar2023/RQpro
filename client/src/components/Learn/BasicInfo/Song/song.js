import React from "react";
import "./song.css";
import Img1 from "./vande.jpg";
import Img2 from "./song.png";


const Song = () => {
  return (
    <div className="container-N">
      <div className="UnderImg">
        <img src={Img1} alt="song" className="song-image" />  
      </div>
      <div className="UnderTable">
        <h3>National Song</h3>
      <table className="anthem-table">
        <tbody>
          <tr>
            <td>Title</td>
            <td>Vande Mataram</td>
          </tr>
          <tr>
            <td>Written by</td>
            <td>Bankim Chandra Chattopadhyay</td>
          </tr>
          <tr>
            <td>Featured in</td>
            <td>Anadamath</td>
          </tr>
          <tr>
            <td>Written on</td>
            <td>November 7, 1875</td>
          </tr>
          <tr>
            <td>Published on</td>
            <td>1882</td>
          </tr>
          <tr>
            <td>Music by</td>
            <td>India (an ancient name for India)</td>
          </tr>
          <tr>
            <td>Raga</td>
            <td>Desh</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>Sanskrit</td>
          </tr>
          <tr>
            <td>First Performed on</td>
            <td>1896</td>
          </tr>
          <tr>
            <td>First Performed by</td>
            <td>Rabindranath Tagore</td>
          </tr>
          <tr>
            <td>Adopted on</td>
            <td>January 24, 1950</td>
          </tr>
          
        </tbody>
      </table>
      </div><br/>
      <div className="UnderTablepre">
        <h3>Translation of National Song</h3>
        <table className="song-table">
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
      <div className="Underbtn">
        <button onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default Song;
