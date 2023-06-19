import React from 'react';
import Icon from '@mui/material/Icon';
import {
  Computer,
  AppShortcut,
  Web,
  Build,
  Person,
  Group,
  Security,
  BugReport
} from '@mui/icons-material';

interface IconSwitchProps {
  iconName: string;
}

const IconSwitch: React.FC<IconSwitchProps> = ({ iconName }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Software development':
        return <Computer />;
      case 'Mobile app development':
        return <AppShortcut />;
      case 'Web app development':
        return <Web />;
      case 'Software maintenance':
        return <Build />;
      case 'Staff augmentation':
        return <Person />;
      case 'Hire development teams':
        return <Group />;
      case 'Cybersecurity consultancy':
        return <Security />;
      case 'Quality assurance testing':
        return <BugReport />;
      default:
        return null;
    }
  };

  return <Icon>{getIcon(iconName)}</Icon>;
};

export default IconSwitch;
