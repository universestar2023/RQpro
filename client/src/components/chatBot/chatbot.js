import React from "react";
import Navbar1 from "../Home/navbar1";
import "./chatbot.css";
import ChatBotImg from './rob.png';

const Chatbot = () => {
  return (
    <>
      <Navbar1 />
      <div className="chatHomePage">
      <div className="chatbotpage">
      <div className="chatbotInside">
        <iframe
          width="450"
          height="530"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/db7483ef-394e-4313-a028-56e8399f6ca2"
          title="Dialogflow Chat"
        ></iframe>
      </div>
      <div className="image-chatbot">
            <img src={ChatBotImg} alt="Sample" />
          </div>
      </div>
      </div>
    </>
  );
};

export default Chatbot;
