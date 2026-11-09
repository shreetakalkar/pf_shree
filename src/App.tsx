import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SystemArchitecture } from './components/SystemArchitecture';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { CodingProfiles } from './components/CodingProfiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-bg text-dark-text selection:bg-cyan-500/25 selection:text-cyan-300 relative transition-colors duration-300">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <FeaturedProjects />
          <SystemArchitecture />
          <Skills />
          <Achievements />
          <CodingProfiles />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

