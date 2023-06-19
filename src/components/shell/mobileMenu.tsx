import React from 'react';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Link,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
  Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IBar } from './navigation-bar';
import { services } from '../../utilities/data';
import IconSwitch from '../../utilities/iconSwitch';

type IMobileBar = Omit<IBar, 'barColor'>;

const MobileMenu = ({ textColor }: IMobileBar) => {
  const [open, setOpen] = React.useState(false);
  const [serviceOpen, setServiceOpen] = React.useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setServiceOpen(false);
    setOpen(false);
  };

  const toggleService = () => {
    setServiceOpen(!serviceOpen);
  };

  const links = [
    {
      link: 'Why Easybe'
    },
    {
      link: 'Services'
    },
    {
      link: 'Clients'
    },
    {
      link: 'About Us'
    }
  ];

  const list = () => (
    <Box sx={{ width: '75%' }} role="presentation" onClick={openDrawer}>
      <List>
        <ListItemButton>
          <ListItemText primary={'Why Easybe'} />
        </ListItemButton>
        <ListItemButton onClick={toggleService}>
          <ListItemText primary={'Services'} />
          <ListItemIcon>
            {serviceOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemIcon>
        </ListItemButton>
        <Collapse in={serviceOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {services.map((service) => (
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <IconSwitch iconName={service.service} />
                </ListItemIcon>
                <ListItemText sx={{ flexGrow: 1 }} primary={service.service} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemText primary="Clients" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="About Us" />
        </ListItemButton>
      </List>
      <Button
        color="secondary"
        variant="contained"
        disableElevation
        sx={{ ml: 2 }}
      >
        Get Started
      </Button>
    </Box>
  );

  return (
    <React.Fragment>
      {!open ? (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawer}
        >
          <MenuIcon sx={{ color: textColor }} />
        </IconButton>
      ) : (
        <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={closeDrawer}
        >
          <CloseIcon sx={{ color: textColor }} />
        </IconButton>
      )}
      <Link href="/">
        <img
          width="100px"
          src="https://res.cloudinary.com/purenelle/image/upload/v1686858609/mobile-EasyBe_gkx1wm.png"
          alt="mobile Easybe logo"
          height="auto"
        />
      </Link>
      <Drawer
        variant="persistent"
        anchor="top"
        open={open}
        PaperProps={{ sx: { marginTop: '64px', pb: '2rem' } }}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default MobileMenu;
