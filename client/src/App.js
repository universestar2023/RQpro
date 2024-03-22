import './App.css';
import Navbar from './components/LandingPage/header/navbar.js';
import Section from './components/LandingPage/firstandsecondPage/section1.js';
import Section2 from './components/LandingPage/firstandsecondPage/section2.js';
import FreeSignUp from './components/LandingPage/FreesignUp/freeSignUp.js';
import Footer from './components/LandingPage/footer/footer.js';
import AssessmentSection from './components/LandingPage/AssessmentPage/AssessmentSection.js';
import ComponentLayout from './components/LandingPage/ComponentLayout/ComponentLayout.js';
import InsightComponent from './components/LandingPage/Insight/insight.js';

function App() {
  return (
  <>
   <Navbar/>
    <Section/>
    <Section2/>
    <InsightComponent/>
    <AssessmentSection /> 
    <ComponentLayout/>
    <FreeSignUp/>
    <Footer/>
    
    
  </>
  );
}

export default App;

