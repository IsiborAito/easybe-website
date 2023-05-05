import React from 'react';
import NavigationBar from './navigation-bar';
// import Home from '../home/home';
// import AboutUs from '../about-us/AboutUs';
// import WhyUs from '../why-us/WhyUs';
import Service from '../service/service';

const Shell = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavigationBar />
      <Service />
    </div>
  );
};

export default Shell;

/***/
