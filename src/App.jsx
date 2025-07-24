import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import React from 'react';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Hero />
      <About />
      <Skills />
    <Experience />
    </div>
    
    <Projects />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
