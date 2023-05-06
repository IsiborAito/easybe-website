import React from 'react';
import NavigationBar from './navigation-bar';
import Home from '../home/home';

const Shell = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavigationBar />
      <Home />
    </div>
  );
};

export default Shell;

/**  */
