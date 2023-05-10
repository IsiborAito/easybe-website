import { MouseEventHandler, ReactNode } from 'react';
import { Link, useNavigate } from '@tanstack/react-location';

interface Props {
  children: ReactNode;
  className?: string;
  to: string;
}

const useNavigateToTop = (props: Props) => {
  const navigate = useNavigate();

  const navigateAndReset: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    navigate({ to: props.to, replace: false });
    window.scrollTo(0, 0);
  };

  return (
    <Link className={props.className} onClick={navigateAndReset} to={props.to}>
      {props.children}
    </Link>
  );
};

export default useNavigateToTop;
