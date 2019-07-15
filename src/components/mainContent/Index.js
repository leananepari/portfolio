import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';


const Index = () => {
  return (
    <div className='mainContent'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;