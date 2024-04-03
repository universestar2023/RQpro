import React, { useEffect } from "react";
import { Popover } from "bootstrap"; // Import Popover from Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import "./LawCategory.css";

export default function LawCategory() {
  // Define popover content for each sub-circle
  const popoverContent = [
    () =>"<div><p>The Juvenile Justice Act in India says that children who make mistakes should be treated differently from adults. It's like a safety net that helps children get back on the right track.</p><ul><li>This law focuses on helping children who break the law to understand their mistakes and grow into better people.</li><li> It provides counseling, education, and support instead of punishment. </li><li>It's important because every child deserves a chance to learn and change for the better.</li></ul></div>",
    () => "<div><p>Civil law is all about resolving disagreements between people or businesses. It helps settle things like who gets to keep a toy or who has to fix a broken fence.</p><ul> Civil law covers many things, like contracts (promises between people), property (stuff you own), and accidents.</li><li>it's like a referee in a game, making sure everyone plays fair and gets treated right.</li></ul></div>",
    () => "<div><p>Constitutional law is about the rules that decide how a country is run and what rights everyone has. It's like the ultimate guidebook for being a good citizen.</p><ul><li> The Constitution is like a super important rulebook in the country. It talks about things like freedom of speech, religion, and fair trials. </li><li>It helps keep the government in check and protects people's rights.</li></ul></div>",
    () => "<div><p>Family law is all about the rules that help families stay happy and safe. It covers things like who takes care of kids when parents split up and what happens when families adopt children.</p><ul><li>Family law helps families work out problems and make sure everyone gets treated fairly.</li><li>It includes things like custody (who takes care of kids), divorce (when parents decide not to be married anymore), and adoption (when families welcome new members).</li></ul></div>",
    () => "<div><p>Cyber law is like the rules for using computers, phones, and the internet safely and responsibly. It helps protect people from cyberbullying, scams, and hackers.</p><ul><li> Cyber law covers a lot of cool stuff, like privacy (keeping your personal stuff safe online), cybercrime (when people break the law using computers), and intellectual property (protecting things you create online, like photos or videos). </li><li> It's important for staying safe and respectful in the digital world.</li></ul></div>",
    () => "<div><p> Education Law in India says that every child has the right to go to school. It's like a special rule that helps children learn and grow.</p><ul><li>This law makes sure that all kids, no matter where they live or how much money their family has, can go to school.</li><li>It's important because education helps children build a better future for themselves and their country.</li></ul></div>",
    () => "<div><p>The Child Labor Ban law in India says that children shouldn't work in jobs that are harmful to them. It's like a shield that protects kids from doing dangerous work.</p><ul><li>This law is important because it keeps children safe and allows them to go to school and play instead of working long hours. </li><li>This law is important because it keeps children safe and allows them to go to school and play instead of working long hours.</li></ul></div>",
    () =>"<div><p>Criminal law is like the rules everyone has to follow to keep everyone safe. It's about what happens when someone breaks those rules, like stealing or hurting someone.</p><ul><li>Criminal law helps decide what punishment is fair for breaking the rules. It includes things like jail time, fines, or community service. </li><li>Police officers, judges, and lawyers work together to make sure everyone follows the rules.</li></ul></div>",
  ];

  useEffect(() => {
    // Initialize popovers when component mounts
    const popoverTriggerList = document.querySelectorAll(".sub-circles");
    popoverTriggerList.forEach((popoverTriggerEl, index) => {
      new Popover(popoverTriggerEl, {
        html: true,
        trigger: "focus",
        content: popoverContent[index](),
      });
    });
  }, []); // Make sure it runs only once on component mount

  return (
    <>
    <div className="law">
    <div>
        <h1 className="lhead">
          <div className="first">Laws Around Us: </div>A Playful Journey into{" "}
          <div className="sec">Rules</div> and{" "}
          <div className="third">Regulations</div>
        </h1>
      </div>
      <div className="page">
        <div className="top">
          <div
            className="sub-circles"
            style={{ backgroundColor: "pink" }}
            tabIndex="0"
            data-bs-toggle="popover"
            title="The Juvenile Justice Act: Giving Children a Second Chance"
            data-bs-trigger="focus"
          >
            <div className="Title">Juvenile Justice Law</div>
          </div>
          <div
            className="sub-circles"
            style={{ backgroundColor: "rgb(135, 212, 222)" }}
            tabIndex="0"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            title="Adventures in Civil Law: Your Rights and Responsibilities"
          >
            <div className="Title">Civil Law</div>
          </div>

          <div
            className="sub-circles"
            style={{ backgroundColor: "rgb(52, 238, 68)" }}
            tabIndex="0"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            title="Discovering the Constitution: Your Rights as a Citizen"
          >
            <div className="Title">Constitution Law</div>
          </div>

          <div
            className="sub-circles"
            style={{ backgroundColor: "rgb(206, 187, 63)" }}
            tabIndex="0"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            title="Family Law: Navigating Relationships and Responsibilities"
          >
            <div className="Title">Family Law</div>
          </div>
        </div>
        <div className="bottom">
          <div
            className="sub-circles"
            style={{ backgroundColor: "rgb(88, 86, 236)" }}
            tabIndex="0"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            title="Cyber Adventures: Exploring Laws in the Digital World"
          >
            <div className="Title">Cyber Law</div>
          </div>
          <div
            className="sub-circles"
            style={{ backgroundColor: "rgb(241, 48, 132)" }}
            tabIndex="0"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            title=" Education Law: Every Child's Ticket to School"
          >
            <div className="Title">Education Law</div>
          </div>
          <div
            className="sub-circles"
            style={{ backgroundColor: "rgb(40, 186, 223)" }}
            tabIndex="0"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            title="The Child Labor Ban: Protecting Children from Work"
          >
            <div className="Title">Child Labour law</div>
          </div>
          <div
            className="sub-circles"
            style={{ backgroundColor: "rgb(219, 6, 42)" }}
            tabIndex="0"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            title="Exploring the World of Criminal Justice"
          >
            <div className="Title">Criminal Law</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
