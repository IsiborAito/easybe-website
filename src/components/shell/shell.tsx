import React from 'react';
import NavigationBar from './navigation-bar';
// import Home from '../home/home';
import AboutUs from '../about-us/AboutUs';

const Shell = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavigationBar />
      <AboutUs />
    </div>
  );
};

export default Shell;

/***/
