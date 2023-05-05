import React from 'react';
import NavigationBar from './navigation-bar';
// import Home from '../home/home';
// import AboutUs from '../about-us/AboutUs';
import WhyUs from '../why-us/WhyUs';

const Shell = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavigationBar />
      <WhyUs />
    </div>
  );
};

export default Shell;

/***/
