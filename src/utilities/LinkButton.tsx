import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useNavigate } from '@tanstack/react-location';

interface LinkButtonProps extends ButtonProps {
  text: string;
  icon?: ReactNode;
  link: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  icon,
  link,
  ...rest
}) => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate({ to: link, replace: false });
    window.scrollTo(0, 0);
  };

  return (
    <Button {...rest} endIcon={icon} onClick={handleNav}>
      {text}
    </Button>
  );
};

export default LinkButton;
