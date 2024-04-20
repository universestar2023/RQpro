
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';





/** import components */
import Main from "./Test/Main";
import Quiz from "./Test/Quiz";
import Result from "./Test/Result";
import { CheckUserExist } from "./helper/helper";

import App from "./App";
import Login from "./components/Login/index.jsx";
import Signup from "./components/Signup/index.jsx";
import Parent from "./components/parentcontrol/parent.js";
import VideoSection from "./components/watchpage/story.js";
import reportWebVitals from "./reportWebVitals";
import RegistrationForm from "./components/registrationPage/RegistrationForm.js";
import Home from "./components/Home/home.js";
import AboutUs from "./components/AboutUs/aboutus.js";
import Play from "./components/play/play.js";
import Rights from "./components/Learn/Rights/rights.js";
import LawCategory from "./components/Learn/Laws/LawCategory.js";
import Accordion from "./components/Learn/Conduct/conduct.js";
import About from "./components/LandingPage/aboutnew/ab.js";
import FeedbackForm from "./components/FeedbackForm/feedbackform.js";
import Behaviour from "./components/Learn/Behaviour/behaviour.js";
import CombineSlidePage from "./components/Learn/Behaviour/combineSlidePage.js";
import DropDown from "./components/Learn/Behaviour/dropDown.js";
import Chatbot from "./components/chatBot/chatbot.js";
import Dashboard from "./components/Home/dash/dash.js";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./redux/store"; // Import your Redux store
import NationalAnthem from './components/Learn/BasicInfo/NationalAnthem/nationalAnthem.js';
import BasicInfo from './components/Learn/BasicInfo/basicinfo.js';
import Pledge from './components/Learn/BasicInfo/Pledge/pledge.js';
import Preamble from './components/Learn/BasicInfo/Preamble/preamble.js';
import Song from './components/Learn/BasicInfo/Song/song.js';

import LawPage from "./components/Learn/Laws/LawPage.js";
import LawsComponent from "./components/Learn/Laws/LawCategory.js";
import ChildReport from './components/parentcontrol/childReport.js';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dash",
    element: <Dashboard />,
  },
  {
    path: "/play",
    element: <Play />,
  },
  {
    path: "/ab",
    element: <About />,
  },
  {
    path: "/learn/conduct",
    element: <Accordion />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/watch",
    element: <VideoSection />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/parent",
    element: <Parent />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
 
  {

    path: "/feedbackform",
    element: <FeedbackForm />,
  },
  {

    path: "/childReport",
    element: <ChildReport/>,
  },
  {
    path: "/learn/rights",
    element: <Rights />,
  },
  
  {
    path: "/learn/behaviour",
    element: <Behaviour />,
  },
  {
    path: "/combineSlidePage",
    element: <CombineSlidePage />,
  },
  {
    path: "/dropDown",
    element: <DropDown />,
  },
  {
    path: "/chatbot",
    element: <Chatbot />,
  },
  {
    path: "/test",
    element: <Main></Main>,
  },
  {
    path: "/learn/basicinfo",
    element: <BasicInfo/>,
  },
  {
    path: "/natinal_anthem",
    element: <NationalAnthem/>,
  },
  {
    path: "/pledge",
    element: <Pledge/>,
  },
  {
    path: "/preamble",
    element: <Preamble/>,
  },
  {
    path: "/song",
    element: <Song/>,
  },
  {
    path: "/test/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/test/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
  {
    path: "/learn/LawCategory",
    element: <LawsComponent />, // Include LawsComponent here
  },
  {
    path: "/juvenileJustice", // Define the path for LawPage
    element: <LawPage pageIndex={0} />, // Include LawPage here
  },
  {
    path: "/civilLaw",
    element: <LawPage pageIndex={1} />, // Include LawsComponent here
  },
  {
    path: "/constitutionLaw",
    element: <LawPage pageIndex={2} />, // Include LawsComponent here
  },
  {
    path: "/familyLaw",
    element: <LawPage pageIndex={3} />, // Include LawsComponent here
  },
  {
    path: "/cyberLaw",
    element: <LawPage pageIndex={4} />, // Include LawsComponent here
  },
  {
    path: "/educationLaw",
    element: <LawPage pageIndex={5} />, // Include LawsComponent here
  },
  {
    path: "/childLabourLaw",
    element: <LawPage pageIndex={6} />, // Include LawsComponent here
  },
  {
    path: "/criminalLaw",
    element: <LawPage pageIndex={7} />, // Include LawsComponent here
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
