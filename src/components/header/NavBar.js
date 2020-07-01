import React, { useEffect, useState, useRef } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  const [width, setWidth] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const node = useRef();

  useEffect(() => {

    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    document.addEventListener("mousedown", handleClick);

    //return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };

  }, [])

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return; 
    }
    setShowMenu(false);
  }

  const handleResize = () => {
    setWidth(window.innerWidth);
    if (window.innerWidth > 500) {
      setShowMenu(false);
    }
  }

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="navbar">
      <div className="links">
        {width <= 500 ? 
          <div ref={node}>
            <svg viewBox="0 0 100 60" width="40" height="40" onClick={handleMenuClick} style={{cursor: 'pointer'}} 
                 >
              <rect width="90" height="6" rx="5" fill="white"></rect>
              <rect y="25" width="90" height="6" rx="5" fill="white"></rect>
              <rect y="50" width="90" height="6" rx="5" fill="white"></rect>
            </svg>
            {showMenu ? 
              <div className="menu-wrap">
                <Link exact to="/" className="menu-linkReg">HOME</Link>
                <Link to="/projects" className="menu-linkReg">PROJECTS</Link>
                <Link to="/about" className="menu-linkReg">ABOUT</Link>
              </div>
            :
            null
            }
          </div>
        : 
        width > 500 ?
          <div ref={node}>
            <Link exact to="/" className="linkReg" activeStyle={{ borderBottom: '1px solid white' }}>HOME</Link>
            <Link to="/projects" className="linkReg" activeStyle={{ borderBottom: '1px solid white' }}>PROJECTS</Link>
            <Link to="/about" className="linkReg" activeStyle={{ borderBottom: '1px solid white' }}>ABOUT</Link>
          </div>
        : 
          null
        }
      </div>

      <div className="icons">

        <Link to="/emailme" className="icon">
          <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: 'white', borderBottom: '1px solid transparent' }} icon={faAt} size='lg'/> 
        </Link>

        <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://www.linkedin.com/in/leana-neparidze");}} className="icon"> 
          <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: 'white', borderBottom: '1px solid transparent' }} icon={faLinkedin} size='lg'/> 
        </Link>

        <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://github.com/leananepari");}} className="icon"> 
          <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: 'white', borderBottom: '1px solid transparent' }} icon={faGithub} size='lg'/> 
        </Link>

      </div>
    </div>
  );
};

export default Navbar;