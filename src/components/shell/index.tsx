import React, { ReactNode } from 'react';
import Footer from './footer';

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
      {children}
      <Footer />
    </div>
  );
};

export default Shell;
