import React from 'react';
import Home from './Home';
import ProjectList from './ProjectList';
import Header from '../header/Header';
import About from './About';


const MainContent = () => {
  return (
    <div className='mainContent'>
      <Header />
      <Home />
      <ProjectList />
      <About />
    </div>
  );
};

export default MainContent;