import React from 'react';
import Navbar from './NavBar';

const Header = ( { tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className='headerWrap'>
      <div className='header'>
        <Navbar tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </div>
  );
};
export default Header;