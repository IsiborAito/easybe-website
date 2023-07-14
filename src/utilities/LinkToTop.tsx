import React from 'react';
import { DefaultGenerics, ReactLocation } from '@tanstack/react-location';

interface Props {
  location: ReactLocation<DefaultGenerics>;
}

const LinkToTop = ({ location }: Props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.current.pathname]);

  return null;
};

export default LinkToTop;
