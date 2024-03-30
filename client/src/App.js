import './App.css';
// import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main";
// import Home from './components/Home/home.js';
// import Signup from './components/Signup/index.jsx';
// import Login from "./components/Login";
import Navbar from './components/LandingPage/header/navbar.js';
import Section from './components/LandingPage/firstandsecondPage/section1.js';
import Section2 from './components/LandingPage/firstandsecondPage/section2.js';
import FreeSignUp from './components/LandingPage/FreesignUp/freeSignUp.js';
import Footer from './components/LandingPage/footer/footer.js';
import AssessmentSection from './components/LandingPage/AssessmentPage/AssessmentSection.js';
import ComponentLayout from './components/LandingPage/ComponentLayout/ComponentLayout.js';
import InsightComponent from './components/LandingPage/Insight/insight.js';

function App() {
	// const user = localStorage.getItem("token");

  return (
    <div>
    {/* <Routes>
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/login" element={<Navigate replace to="/login" />} />
		</Routes> */}
   <Navbar/>
    <Section/>
    <Section2/>
    <InsightComponent/>
    <AssessmentSection /> 
    <ComponentLayout/>
    <FreeSignUp/>
    <Footer/>
    </div>
    
  );
}

export default App;

