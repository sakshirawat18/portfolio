import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <About/>
      <Contact/>
      <Experience/>
      <Hero/>
      <Projects/>
    </div>
  );
}

export default App;
