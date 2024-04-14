import React, { useState } from "react";
import "./dropdown.css"; // Import your CSS file
import Img1 from "./Images/dp1.jpg";
import Img2 from "./Images/dp2.jpg";
import Img3 from "./Images/dp3.jpeg";
import Img4 from "./Images/dp4.jpg";
import Img5 from "./Images/dp5.jpg";
import Img6 from "./Images/dp7.jpg";
import Img7 from "./Images/dp6.jpg";

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <>
      <div className="pageC">
        <h2>Good Behaviour</h2>
        <div className="dropdown1">
          <button
            className="btn btn-secondary"
            onClick={() => handleDropdownToggle("dropdownMenuButton1")}
            style={{ backgroundColor: "skyblue" }}
          >
            Knocking on Doors Before Entering
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          {openDropdown === "dropdownMenuButton1" && (
            <ul className="dropdown-menuB">
              <li>
                <p>
                  The habit of knocking on doors before entering is reflection
                  of our behavior and character.By exhibiting such behavior, we
                  strengthen our relationships with those around us, fostering
                  trust and understanding in our interactions.
                </p>
              </li>
              <li>
                <img src={Img1} alt="module1" />
              </li>
            </ul>
          )}
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary"
            onClick={() => handleDropdownToggle("dropdownMenuButton2")}
            style={{ backgroundColor: "rgb(69, 179, 157)" }}
          >
            Being a Good Guest
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          {openDropdown === "dropdownMenuButton2" && (
            <ul className="dropdown-menuB">
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
          )}
        </div>
        <div className="dropdown1">
          <button
            className="btn btn-secondary"
            onClick={() => handleDropdownToggle("dropdownMenuButton3")}
            style={{ backgroundColor: "rgb(86, 101, 115)" }}
          >
            Personal Hygiene
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          {openDropdown === "dropdownMenuButton3" && (
            <ul className="dropdown-menuB">
              <li>
                <p>
                  Personal hygiene is all about taking care of your body to stay
                  clean and healthy. It's a type of behavior that shows how much
                  you care about yourself and others. Just like we wash our
                  hands before eating to keep germs away, there are other things
                  we can do to keep ourselves clean and fresh.
                </p>
              </li>
              <li>
                <img
                  src={Img3}
                  alt="module1"
                  style={{ width: "200px", height: "200px" }}
                />
              </li>
            </ul>
          )}
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary"
            onClick={() => handleDropdownToggle("dropdownMenuButton4")}
            style={{ backgroundColor: "rgb(236, 112, 99)" }}
          >
            Being Compassionate and Helpful
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          {openDropdown === "dropdownMenuButton4" && (
            <ul className="dropdown-menuB">
              <li>
                <p>
                  Being compassionate and helpful means showing caring behavior
                  towards others and doing things to make them feel better. When
                  someone is sad or needs help, we can show compassionate
                  behavior by being there for them and doing small things to
                  show we care.
                </p>
              </li>
              <li>
                <img src={Img4} alt="module1" />
              </li>
            </ul>
          )}
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary"
            onClick={() => handleDropdownToggle("dropdownMenuButton5")}
            style={{ backgroundColor: "rgb(165, 105, 189)" }}
          >
            Saying ‘Please’ and ‘Thank You’
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          {openDropdown === "dropdownMenuButton5" && (
            <ul
              className="dropdown-menuB"
              aria-labelledby="dropdownMenuButton5"
            >
              <li>
                <p>
                  Saying 'please' and 'thank you' is like using magic words that
                  make people feel happy and appreciated.
                </p>
              </li>
              <li>
                <img src={Img5} alt="module1" />
              </li>
            </ul>
          )}
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary"
            onClick={() => handleDropdownToggle("dropdownMenuButton6")}
            style={{ backgroundColor: "rgb(151, 154, 154)" }}
          >
            Do not fight
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          {openDropdown === "dropdownMenuButton6" && (
            <ul
              className="dropdown-menuB"
              aria-labelledby="dropdownMenuButton6"
            >
              <li>
                <p>
                  Fighting means using our bodies or words to hurt others, and
                  it's not a good behavior. When we fight, we can hurt other
                  people physically or emotionally, and it can make them feel
                  sad, scared, or upset
                </p>
              </li>
              <li>
                <img src={Img6} alt="module1" />
              </li>
            </ul>
          )}
        </div>

        <div className="dropdown1">
          <button
            className="btn btn-secondary"
            onClick={() => handleDropdownToggle("dropdownMenuButton7")}
            style={{ backgroundColor: "rgb(125, 206, 160)" }}
          >
            Saying ‘Sorry’
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          {openDropdown === "dropdownMenuButton7" && (
            <ul
              className="dropdown-menuB"
              aria-labelledby="dropdownMenuButton7"
            >
              <li>
                <p>
                  Saying 'sorry' is like using a special word to help fix things
                  when something goes wrong
                </p>
              </li>
              <li>
                <img src={Img7} alt="module1" />
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
