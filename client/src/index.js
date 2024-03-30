import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Loginpage/login.js';
import Parent from './components/parentcontrol/parent.js';
import VideoSection from './components/watchpage/story.js';
import reportWebVitals from './reportWebVitals';
import RegistrationForm from './components/registrationPage/RegistrationForm.js';
import Home from './components/Home/home.js';
import AboutUs from './components/AboutUs/aboutus.js';
import Contact from './components/Contact/contact.js';
import FeedbackForm from './components/FeedbackForm/feedbackform.js';
import LawCategory from './components/Learn/Laws/LawCategory.js';

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
    path: "/login",
    element: <Login/>,
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
    path: "/LawCategory",
    element: <LawCategory/>,
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
