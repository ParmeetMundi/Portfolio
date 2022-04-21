import './App.css';
import Introduction from './Introduction';
import Navbar from './Navbar';
import Education from './Education';
import Achivements from './Achivements';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Introduction/>
          <Education/>
          <Achivements/>
          <Projects/>
          <Skills/>

    </div>
  );
}

export default App;
