import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/About/About';
import Project from './Components/ProjectSection/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
