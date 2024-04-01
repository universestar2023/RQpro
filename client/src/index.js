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
import Contact from './components/Contact/contact.js';
<<<<<<< HEAD
import Rights from './components/Learn/Rights/rights.js'
import Accordion from './components/Learn/Conduct/conduct.js';
// import FeedbackForm from './components/FeedbackForm/feedbackform.js';
=======
import FeedbackForm from './components/FeedbackForm/feedbackform.js';
import Rights from './components/Learn/Rights/rights.js';
import Behaviour from './components/Learn/Behaviour/behaviour.js';
import CombineSlidePage from './components/Learn/Behaviour/combineSlidePage.js';
import DropDown from './components/Learn/Behaviour/dropDown.js';
>>>>>>> 59201f28e3b2f650d7c63568b7e716f761e22ca1


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/learn/conduct",
    element: <Accordion/>,
  },
 
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/watch",
    element: <VideoSection/>,
  },
  {

    path:"/register",
    element:<RegistrationForm/>
  },
  {
    path: "/parent",
    element: <Parent/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/aboutus",
    element: <AboutUs/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/feedbackform",
    element: <FeedbackForm/>,
  },
  {
    path: "/learn/rights",
    element: <Rights/>,
  },
  {
    path: "/learn/behaviour",
    element: <Behaviour/>,
  },
  {
    path: "/combineSlidePage",
    element: <CombineSlidePage/>,
  },
  {
    path: "/dropDown",
    element: <DropDown/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
