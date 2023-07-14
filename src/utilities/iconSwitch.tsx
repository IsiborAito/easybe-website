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
  color: string;
}

const IconSwitch: React.FC<IconSwitchProps> = ({ iconName, color }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Software development':
        return <Computer sx={{ color: color }} />;
      case 'Mobile app development':
        return <AppShortcut sx={{ color: color }} />;
      case 'Web app development':
        return <Web sx={{ color: color }} />;
      case 'Software maintenance':
        return <Build sx={{ color: color }} />;
      case 'Staff augmentation':
        return <Person sx={{ color: color }} />;
      case 'Hire development teams':
        return <Group sx={{ color: color }} />;
      case 'Cybersecurity consultancy':
        return <Security sx={{ color: color }} />;
      case 'Quality assurance testing':
        return <BugReport sx={{ color: color }} />;
      default:
        return null;
    }
  };

  return <Icon>{getIcon(iconName)}</Icon>;
};

export default IconSwitch;
