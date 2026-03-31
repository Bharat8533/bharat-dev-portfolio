import React from 'react'
import Hero from '../components/HeroSection'
import About from '../components/AboutSection'
import Marquee from '../components/Marquee'
import SkillsSection from '../components/SkillsSection'
import WorkGallery from '../components/WorkGallery'
import Experience from '../components/Experience'
import Education from '../components/Education'


function Home() {
  return (
    <>
      <Hero />
      <About />
      <Marquee />
      <SkillsSection />
      <Experience />
      <Education />
      {/* <WorkGallery /> */}
    </>
  )
}

export default Home
