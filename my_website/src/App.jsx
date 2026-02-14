// 1. The Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Me from './components/Me';
import Skills from './components/Skills';
import StarBackground from './components/StarBackground';
import './App.css';


function App() {
  return (
    <div className="portfolio-app">
      {/* 2. The Assembly */}
      <Navbar />
      
      <main>
        <div className='star-container'>
          <StarBackground/>
          </div>
          <div className='hero-flex-container'>
            <Me/>
            <Hero />      {/* <section id="hero"> inside */}
           </div>
            <Skills />
            <Projects />  {/* <section id="projects"> inside */}
            <Resume />    {/* <section id="resume"> inside */}
            <Contact />   {/* <section id="contact"> inside */}
        
        
        
      </main>

      <footer>
        <p>© 2026 Alexander Theis</p>
      </footer>
    </div>
  );
}

export default App;