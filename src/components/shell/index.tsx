import React, { ReactNode } from 'react';
import Footer from './footer';
import NavigationBar from './navigation-bar';
import { EasyBeContext, IContextProps } from '../../utilities/context';

interface IProps {
  children: ReactNode;
}

const Shell = ({ children }: IProps) => {
  const { currLocation } = React.useContext(EasyBeContext) as IContextProps;
  let barColor = '#ffffff';
  let textColor = '#122C34';

  if (currLocation === '/' || currLocation === '/contact-us') {
    barColor = '#122C34';
    textColor = '#ffffff';
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <NavigationBar barColor={barColor} textColor={textColor} />
      {children}
      <Footer />
    </div>
  );
};

export default Shell;
