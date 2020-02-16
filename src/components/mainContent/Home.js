import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <BrowserRouter>
      <div id='home'>
        <div>
        <h1>Full-stack Developer</h1>
        <h2>hi. I am Leana. I love to build beautiful, interactive applications.</h2>
        </div>
      </div>
      <div className="home-projects-button">
          <NavLink className="linkReg" smooth to="/#projects" activeClassName="activeRoute">
                projects</NavLink>
          <NavLink className="icon" smooth to="/#projects" activeClassName="activeRoute">
            <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: 'white'}} icon={faAngleDown} size='lg'/>
          </NavLink>
      </div>
    </BrowserRouter>
  );
};

export default Home;