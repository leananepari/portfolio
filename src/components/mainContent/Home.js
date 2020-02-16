import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";


const Home = ( { setSelectedTab } ) => {

  const handleClick = () => {
    setSelectedTab("PROJECTS")
  }

  return (
    <BrowserRouter>
      <div id='home'>
        <div>
        <h1>Full-stack Developer</h1>
        <h2>hi. I am Leana. I love to build beautiful, interactive applications.</h2>
        </div>
      </div>
      <div className="home-projects-button">
          <NavLink onClick={handleClick} className="linkReg" to="/projects" activeClassName="activeRoute">
                projects</NavLink>
      </div>
    </BrowserRouter>
  );
};

export default Home;