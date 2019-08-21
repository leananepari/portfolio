import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="navbar">
      <BrowserRouter>
        <div className="navigation">
          <ul>
            <NavLink className="linkReg" smooth to="/#home" activeClassName="activeRoute">
              Home</NavLink>
            <NavLink className="linkReg" smooth to="/#about" activeClassName="activeRoute">
              About</NavLink>
            <NavLink className="linkReg" smooth to="/#portfolio" activeClassName="activeRoute">
              Portfolio</NavLink>
            <NavLink className="linkReg" smooth to="/#contact" activeClassName="activeRoute">
              Contact</NavLink>
          </ul>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;