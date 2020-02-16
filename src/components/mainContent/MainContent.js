import React, { useState } from 'react';
import Header from '../header/Header';
import { tabs } from '../../data';
import Display from './Display';


const MainContent = () => {
  const [selectedTab, setSelectedTab] = useState("HOME");

  return (
    <div className='mainContent'>
      <Header tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Display selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    </div>
  );
};

export default MainContent;