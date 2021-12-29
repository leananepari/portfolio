import React, { useEffect, useState, useRef } from 'react';
import { NavLink as Link } from 'react-router-dom';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import atsign from '../../assets/atsign.png';


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
                <Link to="/" className="menu-linkReg">ABOUT</Link>
                <Link to="/projects" className="menu-linkReg">PROJECTS</Link>
                <Link to="/resume" className="menu-linkReg" >RESUME</Link>
              </div>
            :
            null
            }
          </div>
        : 
        width > 500 ?
          <div ref={node}>
            <Link exact to="/" className="linkReg" activeStyle={{ borderBottom: '1px solid black' }}>ABOUT</Link>
            <Link to="/projects" className="linkReg" activeStyle={{ borderBottom: '1px solid black' }}>PROJECTS</Link>
            <Link to="/resume" className="linkReg" activeStyle={{ borderBottom: '1px solid black' }}>RESUME</Link>
          </div>
        : 
          null
        }
      </div>

      <div className="icons">

        <Link to="/emailme" className="icon">
          <img src={atsign} style={{width: '18px', cursor: 'pointer', color: '#787878', borderBottom: '1px solid transparent' }}/>
        </Link>

        <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://www.linkedin.com/in/leana-neparidze");}} className="icon"> 
          <img src={linkedin} style={{width: '18px', cursor: 'pointer', color: '#787878', borderBottom: '1px solid transparent' }}/>
        </Link>

        <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://github.com/leananepari");}} className="icon"> 
          <img src={github} style={{width: '18px', cursor: 'pointer', color: '#787878', borderBottom: '1px solid transparent' }}/>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;