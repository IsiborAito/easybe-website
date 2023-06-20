/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from '@tanstack/react-location';
import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  styled,
  LinkProps,
  Menu,
  MenuItem,
  ListItemIcon,
  Stack,
  ListItemText,
  useScrollTrigger,
  Box
} from '@mui/material';
import MobileMenu from './mobileMenu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { EasyBeContext, IContextProps } from '../../utilities/context';
import { services } from '../../utilities/data';
import IconSwitch from '../../utilities/iconSwitch';
import LinkButton from '../../utilities/LinkButton';

interface Props {
  children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

const StyledLinks = styled(Link)<LinkProps>(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer'
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  paddingLeft: '6rem',
  paddingRight: '6rem',
  [theme.breakpoints.down('md')]: {
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem',
    paddingBottom: theme.spacing(1)
  }
}));

export interface IBar {
  barColor: string;
  textColor: string;
}

const NavigationBar = ({ barColor, textColor }: IBar) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { isMobile } = React.useContext(EasyBeContext) as IContextProps;

  const navigate = useNavigate();

  const goToLink = (link: string) => {
    navigate({ to: link, replace: false });
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const regularAppBar = () => (
    <>
      <Link href="/" sx={{ width: '30%', textDecoration: 'none' }}>
        <img
          width="50%"
          height="auto"
          src={
            barColor === '#122C34'
              ? 'https://res.cloudinary.com/purenelle/image/upload/v1683386712/Easybe/EasyBe_sfmjbi.png'
              : 'https://res.cloudinary.com/purenelle/image/upload/v1683388038/Easybe/easybe_logo_dark_tbiukr.png'
          }
          alt="Home link"
        />
      </Link>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        sx={{ flexGrow: 1 }}
      >
        <Stack
          direction="row"
          justifyContent={'space-evenly'}
          alignItems="center"
          sx={{ flexGrow: 1 }}
        >
          <StyledLinks href="/why-us">
            <Typography variant="h6" sx={{ color: textColor }}>
              Why Us?
            </Typography>
          </StyledLinks>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <StyledLinks
              href="#"
              onMouseOver={handleOpen}
              sx={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <>
                <Typography variant="h6" sx={{ color: textColor }}>
                  Services
                </Typography>
                <KeyboardArrowDownIcon sx={{ color: textColor }} />
              </>
            </StyledLinks>
            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                onMouseLeave: handleClose
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
              sx={{
                '& .MuiList-root': {
                  display: 'flex',
                  padding: '20px',
                  flexWrap: 'wrap',
                  maxWidth: '720px',
                  justifyContent: 'space-around'
                }
              }}
            >
              {services.map(({ service, link }) => (
                <MenuItem
                  key={service}
                  onClick={() => goToLink(link)}
                  sx={{ flexBasis: '50%' }}
                >
                  <ListItemIcon>
                    <IconSwitch iconName={service} />
                  </ListItemIcon>
                  <ListItemText>{service}</ListItemText>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <StyledLinks href="/clients">
            <Typography variant="h6" sx={{ color: textColor }}>
              Clients
            </Typography>
          </StyledLinks>
          <StyledLinks href="/about-us">
            <Typography variant="h6" sx={{ color: textColor }}>
              About Us
            </Typography>
          </StyledLinks>
        </Stack>
        <LinkButton
          variant="contained"
          color="secondary"
          sx={{
            boxShadow: 0,
            height: '3rem'
          }}
          link="/contact-us"
          text="Get Started"
        />
      </Stack>
    </>
  );
  return (
    <ElevationScroll>
      <AppBar sx={{ backgroundColor: barColor }}>
        <StyledToolbar>
          {isMobile ? <MobileMenu textColor={textColor} /> : regularAppBar()}
        </StyledToolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavigationBar;
