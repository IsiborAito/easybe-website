import React from 'react';
import { useNavigate } from '@tanstack/react-location';
import {
  IconButton,
  Drawer,
  List,
  Box,
  Link,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
  Collapse,
  Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IBar } from './navigation-bar';
import { services } from '../../utilities/data';
import IconSwitch from '../../utilities/iconSwitch';

const MobileMenu = ({ textColor, barColor }: IBar) => {
  const [open, setOpen] = React.useState(false);
  const [serviceOpen, setServiceOpen] = React.useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setServiceOpen(false);
    setOpen(false);
  };

  const navigate = useNavigate();

  const goToLink = (link: string) => {
    setOpen(false);
    navigate({ to: link, replace: false });
  };

  const toggleService = () => {
    setServiceOpen(!serviceOpen);
  };

  const list = () => (
    <Box sx={{ width: '100%' }} role="presentation">
      <List>
        <ListItemButton onClick={() => goToLink('/why-us')}>
          <ListItemText primary={'Why Easybe'} sx={{ color: textColor }} />
        </ListItemButton>
        <ListItemButton onClick={toggleService}>
          <ListItemText primary={'Services'} sx={{ color: textColor }} />
          <ListItemIcon>
            {serviceOpen ? (
              <ExpandLessIcon sx={{ color: textColor }} />
            ) : (
              <ExpandMoreIcon sx={{ color: textColor }} />
            )}
          </ListItemIcon>
        </ListItemButton>
        <Collapse in={serviceOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {services.map((service) => (
              <ListItemButton
                key={service.service}
                sx={{ pl: 4 }}
                onClick={() => goToLink(service.link)}
              >
                <ListItemIcon>
                  <IconSwitch iconName={service.service} color={textColor} />
                </ListItemIcon>
                <ListItemText
                  sx={{ flexGrow: 1, color: textColor }}
                  primary={service.service}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItemButton onClick={() => goToLink('/clients')}>
          <ListItemText primary="Clients" sx={{ color: textColor }} />
        </ListItemButton>
        <ListItemButton onClick={() => goToLink('/about-us')}>
          <ListItemText primary="About Us" sx={{ color: textColor }} />
        </ListItemButton>
      </List>
      <Button
        color="secondary"
        variant="contained"
        disableElevation
        sx={{ ml: 2 }}
        onClick={() => goToLink('/contact-us')}
      >
        Get Started
      </Button>
    </Box>
  );

  return (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: '100%' }}
      >
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
      </Stack>

      <Drawer
        variant="persistent"
        anchor="top"
        open={open}
        onClose={closeDrawer}
        PaperProps={{
          sx: { marginTop: '64px', pb: '2rem', backgroundColor: barColor }
        }}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default MobileMenu;
