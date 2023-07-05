import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
