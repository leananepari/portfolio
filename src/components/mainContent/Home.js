import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <div id='home'>
        <h1>Hello, I am Leana Neparidze.<br></br>
        I am a Full-Stack Web Developer.</h1>
        <NavLink className="linkReg" smooth to="/#about" activeClassName="activeRoute">
                Button</NavLink>
      </div>
    </BrowserRouter>
  );
};

export default Home;