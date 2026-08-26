// App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/HeroSection'
import About from './components/AboutSection'
import Marquee from './components/Marquee'
import SkillsSection from './components/SkillsSection'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  return (
    <>
      <div className="selection:bg-purple-600 selection:text-white overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Marquee />
        <SkillsSection />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </div>
    </>
  );
}

export default App;