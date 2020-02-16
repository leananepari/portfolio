import React from 'react';
import Home from './Home';
import ProjectList from './ProjectList';
import About from './About';


const Display = ( { selectedTab, setSelectedTab } ) => {

  if (selectedTab === "HOME") {
    return <Home setSelectedTab={setSelectedTab}/>
  } else if (selectedTab === "PROJECTS") {
    return <ProjectList />
  } else {
    return <About />
  }
};

export default Display;