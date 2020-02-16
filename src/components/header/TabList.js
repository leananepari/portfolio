import React from 'react';
import Tab from './Tab';

const TabList = ( { tabs, selectedTab, setSelectedTab }) => {
  return (
    <div>
      {tabs.map((tab) => {
        return <Tab tab={tab} selectedTab={selectedTab} setSelectedTab={setSelectedTab} key={tab.title}/>
      })}
    </div>
  );
};
export default TabList;