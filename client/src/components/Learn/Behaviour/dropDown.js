import React from "react";
import "./dropdown.css";
import Img1 from "./Images/dp1.jpg";
import Img2 from "./Images/dp2.jpg";
import Img3 from "./Images/dp3.jpeg"
import Img4 from "./Images/dp4.jpg";
import Img5 from "./Images/dp5.jpg";
import Img6 from "./Images/dp7.jpg";
import Img7 from "./Images/dp6.jpg";

const Dropdown = () => {
  return (
    <>
      <div className="pageC">
        <h2>Good Behaviour</h2>
        <div className="dropdown1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "skyblue" }}
          >
            Knocking on Doors Before Entering
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <p>
                The habit of knocking on doors before entering is reflection of
                our behavior and character.By exhibiting such behavior, we
                strengthen our relationships with those around us, fostering
                trust and understanding in our interactions.
              </p>
            </li>
            <li>
              <img src={Img1} alt="module1" />
            </li>
          </ul>
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "rgb(69, 179, 157)" }}
          >
            Being a Good Guest
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <p>
                Being a good guest means being polite and respectful when you
                visit someone else's house or place. Just like how we want
                others to be nice when they visit our home, we should also be
                nice when we visit theirs.
              </p>
            </li>
            <li>
              <img src={Img2} alt="module1" />
            </li>
          </ul>
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "rgb(86, 101, 115)" }}
          >
            Personal Hygiene
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <p>Personal hygiene is all about taking care of your body to stay clean and healthy. It's a type of behavior that shows how much you care about yourself and others. Just like we wash our hands before eating to keep germs away, there are other things we can do to keep ourselves clean and fresh.</p>
            </li>
            <li>
              <img src={Img3} alt="module1" style={{ width: "200px", height: "200px" }} />
            </li>
          </ul>
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "rgb(236, 112, 99)" }}
          >
            Being Compassionate and Helpful
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <p>Being compassionate and helpful means showing caring behavior towards others and doing things to make them feel better. When someone is sad or needs help, we can show compassionate behavior by being there for them and doing small things to show we care.</p>
            </li>
            <li>
              <img src={Img4} alt="module1" />
            </li>
          </ul>
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "rgb(165, 105, 189)" }}
          >
            Saying ‘Please’ and ‘Thank You’
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <p>Saying 'please' and 'thank you' is like using magic words that make people feel happy and appreciated.</p>
            </li>
            <li>
              <img src={Img5} alt="module1" />
            </li>
          </ul>
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "rgb(151, 154, 154)" }}
          >
            Do not fight
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <p>Fighting means using our bodies or words to hurt others, and it's not a good behavior. When we fight, we can hurt other people physically or emotionally, and it can make them feel sad, scared, or upset</p>
            </li>
            <li>
              <img src={Img6} alt="module1" />
            </li>
          </ul>
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "rgb(125, 206, 160)" }}
          >
            Saying ‘Sorry’
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <p>Saying 'sorry' is like using a special word to help fix things when something goes wrong</p>
            </li>
            <li>
              <img src={Img7} alt="module1" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
