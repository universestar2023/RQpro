import './App.css';
import Navbar from './components/header/navbar.js';
import Section from './components/firstandsecondPage/section1.js';
import Section2 from './components/firstandsecondPage/section2.js';
import FreeSignUp from './components/FreesignUp/freeSignUp.js';
import Footer from './components/footer/footer.js';
import AssessmentSection from './components/AssessmentPage/AssessmentSection.js';
import ComponentLayout from './components/ComponentLayout/ComponentLayout.js';
import InsightComponent from './components/Insight/insight.js';

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

