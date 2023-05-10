import React, { ReactNode } from 'react';
import Footer from './footer';
import NavigationBar from './navigation-bar';

interface IProps {
  children: ReactNode;
}

const Shell = ({ children }: IProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Shell;
