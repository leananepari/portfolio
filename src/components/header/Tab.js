import React, { useState, useEffect } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';

const Tab = ( { tab, selectedTab, setSelectedTab }) => {

  const handleClick = () => {
    setSelectedTab(tab.title);
  }

  return (
    <>
      <NavLink onClick={handleClick} className="linkReg" 
               to={`/${tab.title.toLowerCase() === "home" ? "" : tab.title.toLowerCase()}`} activeClassName="activeRoute"
               style={{borderBottom: `${selectedTab === tab.title ? "1px solid white" : "1px solid transparent"}`}}
      >
        {tab.title}</NavLink>
    </>
  );
};
export default Tab;