// 1. The Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Skills from './components/Skills';
import StarBackground from './components/StarBackground';
import { RetroGrid } from './components/ui/retro-grid';
import { Vortex } from './components/ui/vortex';
import '@fontsource/inter';
import '@fontsource/inter/500.css'; // Optional: for specific weights
import '@fontsource/inter/700.css';
import './App.css';


function App() {
  return (
    <div className="portfolio-app relative min-h-screen text-white"> 
      {/* ^^^ ADDED 'text-white' to fix your font color */}

      {/* 1. THE BACKGROUND GRID */}
      <div className="fixed inset-0 z-0">
        <RetroGrid
           className="h-full w-full"
           angle={65}
           // CRITICAL: Makes the grid background clear so your sections show
           opacity={0.5}
        />
      </div>
      
      {/* 2. THE CONTENT (Navbar, Hero, etc.) */}
      {/* z-10 ensures this sits ON TOP of the grid */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="flex flex-col gap-20"> 
          {/* ^^^ Added gap so sections don't squish together */}
          
          <Hero />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>
        
        <footer className="py-10 text-center text-gray-400">
          <p>© 2026 Alexander Theis</p>
        </footer>
      </div>
      
    </div>
  );
}

export default App;