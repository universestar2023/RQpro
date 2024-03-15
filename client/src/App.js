import './App.css';
import Navbar from './components/header/navbar';
import Section from './components/section1';
import Section2 from './components/section2';
import FreeSignUp from './components/freeSignUp';
import Footer from './components/footer';
import AssessmentSection from './components/AssessmentSection';
import ComponentLayout from './components/ComponentLayout/ComponentLayout';

function App() {
  return (
  <>
   <Navbar/>
    <Section/>
    <Section2/>
    <AssessmentSection /> 
    <ComponentLayout/>
    <FreeSignUp/>
    <Footer/>
  </>
  );
}

export default App;

