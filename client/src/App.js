import './App.css';
import Navbar from './components/header/navbar';
import Section from './components/section1';
import AssessmentSection from './components/AssessmentSection';
import ComponentLayout from './components/ComponentLayout/ComponentLayout';

function App() {
  return (
  <>
   <Navbar/>
    <Section/>
    <AssessmentSection /> 
    <ComponentLayout/>
  </>
  );
}

export default App;

