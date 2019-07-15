import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from '../header/Header';


const MainContent = () => {
  return (
    <div className='mainContent'>
      <Home />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default MainContent;