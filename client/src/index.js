
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login/index.jsx';
import Signup from './components/Signup/index.jsx'
import Parent from './components/parentcontrol/parent.js';
import VideoSection from './components/watchpage/story.js';
import reportWebVitals from './reportWebVitals';
import RegistrationForm from './components/registrationPage/RegistrationForm.js';
import Home from './components/Home/home.js';
import AboutUs from './components/AboutUs/aboutus.js';
import Play from './components/play/play.js';
import Rights from './components/Learn/Rights/rights.js'
import LawCategory from './components/Learn/Laws/LawCategory.js';
import Accordion from './components/Learn/Conduct/conduct.js';
import About from './components/LandingPage/aboutnew/ab.js';
import FeedbackForm from './components/FeedbackForm/feedbackform.js';
import Behaviour from './components/Learn/Behaviour/behaviour.js';
import CombineSlidePage from './components/Learn/Behaviour/combineSlidePage.js';
import DropDown from './components/Learn/Behaviour/dropDown.js';
import Chatbot from './components/chatBot/chatbot.js';
import Dashboard from './components/Home/dash/dash.js';

// import './index.css';import '../styles/App.css';


// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from "./Test/Main";
import Quiz from "./Test/Quiz";
import Result from "./Test/Result";
import { CheckUserExist } from "./helper/helper";

// import App from "./App";
// import Login from "./components/Login/index.jsx";
// import Signup from "./components/Signup/index.jsx";
// import Parent from "./components/parentcontrol/parent.js";
// import VideoSection from "./components/watchpage/story.js";
// import reportWebVitals from "./reportWebVitals";
// import RegistrationForm from "./components/registrationPage/RegistrationForm.js";
// import Home from "./components/Home/home.js";
// import AboutUs from "./components/AboutUs/aboutus.js";
// import Contact from "./components/Contact/contact.js";
// import Play from "./components/play/play.js";
// import Rights from "./components/Learn/Rights/rights.js";
// import LawCategory from "./components/Learn/Laws/LawCategory.js";
// import Accordion from "./components/Learn/Conduct/conduct.js";
// import About from "./components/LandingPage/aboutnew/ab.js";
// import FeedbackForm from "./components/FeedbackForm/feedbackform.js";
// import Behaviour from "./components/Learn/Behaviour/behaviour.js";
// import CombineSlidePage from "./components/Learn/Behaviour/combineSlidePage.js";
// import DropDown from "./components/Learn/Behaviour/dropDown.js";
// import Chatbot from "./components/chatBot/chatbot.js";
// import Dashboard from "./components/Home/dash/dash.js";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./redux/store"; // Import your Redux store
// import Exam from "./Test/Exam.js"; // Import the Exam component

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
    path: "/learn/rights",
    element: <Rights />,
  },
  {
    path: "/learn/LawCategory",
    element: <LawCategory />,
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
