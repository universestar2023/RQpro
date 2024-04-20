import React from "react";
import "./play.css";
import Navbar1 from "../Home/navbar1";
import image1 from "./Ar.png";
import image2 from "./Dor.jpg";
import image3 from "./iCivics.png";
import image4 from "./LawCraft.jpg";

function Play() {
  return (
    <div>
      <Navbar1 />
      <div className="container53">
        {/* Row 1 */}
        <div className="rower">
          {/* Column 1 */}
          <div className="columner">
            <div className="card1er">
              {/* Card content */}
              <img className="suu" src={image1} alt="Image 1" /> {/* Image space */}
              <h3> Argument Wars</h3>
              <p>
                In this game, players argue landmark Supreme Court cases,
                learning about the Constitution and legal precedent in the
                process.
              </p>
              <a href="https://www.icivics.org/games/argument-wars">
                <button>Play Now</button>
              </a>{" "}
              {/* Button below the card */}
            </div>
          </div>
          {/* Column 2 */}
          <div className="columner">
            <div className="card1er">
              {/* Card content */}
              <img className="suu" src={image2} alt="Image 2" /> {/* Image space */}
              <h3>Do I Have A Right?</h3>
              <p>
                {" "}
                In this game, players run their own law firm and determine
                whether clients' constitutional rights have been violated.
              </p>
              <a href="https://www.icivics.org/games/do-i-have-right">
                <button>Play Now</button>
              </a>{" "}
              {/* Button below the card */}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="rower">
          {/* Column 1 */}
          <div className="columner">
            <div className="card1er">
              {/* Card content */}
              <img className="suu" src={image3} alt="Image 3" /> {/* Image space */}
              <h3>iCivics</h3>
              <p>
                iCivics offers a variety of free online games and interactive
                activities related to civics and law.
              </p>
              <a href="https://www.icivics.org/games">
                <button>Play Now</button>
              </a>{" "}
              {/* Button below the card */}
            </div>
          </div>
          {/* Column 2 */}
          <div className="columner">
            <div className="card1er">
              {/* Card content */}
              <img className="suu" src={image4} alt="Image 4" /> {/* Image space */}
              <h3>LawCraft</h3>
              <p>
                {" "}
                LawCraft is a game that puts players in the role of a
                legislator, allowing them to propose and debate bills in a
                virtual Congress.
              </p>
              <a href="https://www.icivics.org/games/lawcraft">
                <button>Play Now</button>
              </a>{" "}
              {/* Button below the card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play;
