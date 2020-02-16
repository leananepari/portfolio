import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import TabList from './TabList';


const Navbar = ( { tabs, selectedTab, setSelectedTab }) => {
  
  return (
    <div className="navbar">
      <BrowserRouter>
        <div className="links">
          <TabList tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
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