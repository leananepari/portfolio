import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {

  return (
    <div className="navbar">
      <div className="links">
        <Link exact to="/" className="linkReg" activeStyle={{ borderBottom: '1px solid white' }}>HOME</Link>
        <Link to="/projects" className="linkReg" activeStyle={{ borderBottom: '1px solid white' }}>PROJECTS</Link>
        <Link to="/about" className="linkReg" activeStyle={{ borderBottom: '1px solid white' }}>ABOUT</Link>
      </div>
      <div className="icons">
      
        <Link to="" className="icon">
          <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: 'white'}} icon={faAt} size='lg'/> 
        </Link>

        <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://www.linkedin.com/in/leana-neparidze");}} className="icon"> 
          <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: 'white'}} icon={faLinkedin} size='lg'/> 
        </Link>

        <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://github.com/leananepari");}} className="icon"> 
          <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: 'white'}} icon={faGithub} size='lg'/> 
        </Link>

      </div>
    </div>
  );
};

export default Navbar;