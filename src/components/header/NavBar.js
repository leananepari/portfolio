import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';



const Navbar = () => {
  return (
    <div className="navbar">
      <BrowserRouter>
        <div className="links">
          <ul>
            <NavLink className="linkReg" smooth to="/#home" activeClassName="activeRoute">
              HOME</NavLink>
            <NavLink className="linkReg" smooth to="/#about" activeClassName="activeRoute">
              PROJECTS</NavLink>
            <NavLink className="linkReg" smooth to="/#portfolio" activeClassName="activeRoute">
              ABOUT</NavLink>
          </ul>
        </div>
        <div className="icons">
          <div className="icon"><FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: 'white'}} icon={faAt} size='lg'/></div>
          <div className="icon"><FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: 'white'}} icon={faLinkedin} size='lg'/></div>
          <div className="icon"><FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: 'white'}} icon={faGithub} size='lg'/></div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;