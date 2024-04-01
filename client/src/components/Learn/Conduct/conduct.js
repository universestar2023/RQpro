import React from "react";
import "./conduct.css";
import Navbar1 from "../../Home/navbar1";

function Accordion() {
  return (
    <div>
      <Navbar1 />
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              How can you protect yourself when you get kidnapped?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  Stay Calm and Observant
                  <br />
                  <p>Keep youself calm and silent.</p>
                </li>
                <li>
                  Look for Opportunities
                  <br />
                  <p>Search if there is chance to escape.</p>
                </li>
                <li>
                  Attract Attention
                  <br />
                  <p>
                    Try to attract attention by making noise, yelling, or
                    banging on objects to alert nearby people.
                  </p>
                </li>
                <li>
                  Leave Clues
                  <br />
                  <p>Leave clues such as dropping his/her items.</p>
                </li>
                <li>
                  Remember Safety Tips
                  <br />
                  <p>Think of safety rules such as not to talk strangers.</p>
                </li>
                <li>
                  Stay Hopeful
                  <br />
                  <p>Keep hope that your parents will find you.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              How to act when your school gets in fire?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  Stay Calm
                  <br />
                  <p>Panic can make the situation more dangerous..</p>
                </li>
                <li>
                  Alert Others
                  <br />
                  <p>
                    If you are first to observe fire then make sound like, Fire!
                    else activate fire alarm.
                  </p>
                </li>
                <li>
                  Stay Low
                  <br />
                  <p>
                    If there is smoke, stay low to the ground where the air is
                    clearer and cover your nose and mouth with a cloth to avoid
                    inhaling smoke.
                  </p>
                </li>
                <li>
                  Gather at a Safe Location
                  <br />
                  <p>
                    Once outside, move to a designated assembly point or a safe
                    distance away from the building.
                  </p>
                </li>
                <li>
                  Do Not Re-enter the Building
                  <br />
                  <p>
                    Don't re-enter the building until authorities have declared
                    it safe to do so.
                  </p>
                </li>
                <li>
                  Follow Instructions
                  <br />
                  <p>
                    Listen to instructions from teachers, school staff, or
                    emergency responders
                  </p>
                </li>
                <li>
                  Report to Emergency Services
                  <br />
                  <p>
                    If emergency services have not already been notified, call
                    911 or the emergency number in your area to report the fire.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              What to do when cylinder catches fire?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  Stay Calm
                  <br />
                  <p>Panic can make the situation more dangerous..</p>
                </li>
                <li>
                  Don't Approach the Fire
                  <br />
                  <p>
                    It's crucial to keep a safe distance to avoid getting
                    injured.
                  </p>
                </li>
                <li>
                  Warn Others
                  <br />
                  <p>
                    Warn people about the fire and the potential danger posed by
                    the gas cylinder.
                  </p>
                </li>
                <li>
                  Do Not Use Water
                  <br />
                  <p>
                    Water can cause the fire to spread or even result in an
                    explosion due to the pressurized nature of the cylinder.
                  </p>
                </li>
                <li>
                  Cover Nose and Mouth
                  <br />
                  <p>
                    Cover your nose and mouth with a cloth to avoid inhaling
                    smoke or toxic fumes.
                  </p>
                </li>
                <li>
                  Stay Away from Electrical Equipment
                  <br />
                  <p>
                    If there are electrical appliances or outlets nearby, then
                    stay away from them to prevent the risk of electrocution.
                  </p>
                </li>
                <li>
                  Report to Emergency Services
                  <br />
                  <p>
                    If emergency services have not already been notified, call
                    911 or the emergency number in your area to report the fire.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Additional Accordion Item */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              What to do when electric short circuit happens in house?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            <ul>
                <li>
                  Stay Calm
                  <br />
                  <p>Panic can make the situation more dangerous.</p>
                </li>
                <li>
                Alert an Adult
                  <br />
                  <p>
                  Inform an adult, preferably a parent or guardian, about the electrical short circuit.
                  </p>
                </li>
                <li>
                Keep Away from Water
                  <br />
                  <p>
                  Water can conduct electricity and increase the risk of electric shock.
                  </p>
                </li>
                <li>
                Avoid Touching Appliances or Cords
                  <br />
                  <p>
                  Not to touch any electrical appliances, switches, or cords near the area of the short circuit. 
                  </p>
                </li>
                <li>
                Turn Off Power
                  <br />
                  <p>
                  Turn off the power supply to the affected area using the circuit breaker or fuse box.
                  </p>
                </li>
                <li>
                  Stay Away from Electrical Equipment
                  <br />
                  <p>
                    If there are electrical appliances or outlets nearby, then
                    stay away from them to prevent the risk of electrocution.
                  </p>
                </li>
                <li>
                Evacuate the Area
                  <br />
                  <p>
                  Evacuate the area where the short circuit occurred. 
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
