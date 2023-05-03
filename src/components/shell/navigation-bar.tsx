/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Box from '@mui/material/Box';
import {
  AppBar,
  Button,
  Link,
  Popper,
  Toolbar,
  Typography,
  styled,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'static',
  boxShadow: 'none',
  [theme.breakpoints.down('lg')]: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1
  }
}));

const StyledAppToolbar = styled(Toolbar)(({ theme }) => ({
  height: '130px',
  display: 'flex',
  justifyContent: 'space-evenly',
  backgroundColor: ' #122c34',
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: '20px',
  fontWeight: 'normal',
  textAlign: 'center',
  lineHeight: 2.7,
  [theme.breakpoints.down('lg')]: {
    height: '80px'
  }
}));

export const StyledLinks = styled(Link)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none'
}));

const StyledMenuLink = styled(Box)(({ theme }) => ({
  width: '45%',
  //   backgroundColor:'grey',
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '15px'
  }
}));
const StyledContact = styled(Box)(({ theme }) => ({
  width: 'auto',
  // backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'right',
  alignItems: 'right',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '15px'
  }
}));

interface MobileMenuProps {
  open: HTMLElement | null;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => (
  <Drawer anchor="top" open={Boolean(open)} onClose={onClose}>
    <Box
      sx={{ width: 'auto', marginTop: '100px' }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <MenuItem>
        <Link href="#">EasyBe</Link>
      </MenuItem>

      <MenuItem>
        <Link href="#">Services</Link>
      </MenuItem>
      <MenuItem>
        <Link href="#">Clients</Link>
      </MenuItem>

      <MenuItem>
        <Link href="#">About Us</Link>
      </MenuItem>
    </Box>
  </Drawer>
);

function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const id = open ? 'simple-popper' : undefined;
  const id2 = open2 ? 'simple-popper' : undefined;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <>
      <StyledAppBar>
        <StyledAppToolbar>
          <Typography>Logo</Typography>
          {isMobile && (
            <>
              <IconButton
                sx={{ marginLeft: 'auto' }}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <MobileMenu
                open={mobileMenuAnchorEl}
                onClose={handleMobileMenuClose}
              />
            </>
          )}
          <StyledMenuLink>
            <StyledLinks href="#">EasyBe</StyledLinks>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <StyledLinks href="#" onMouseOver={handleOpen}>
                Services
              </StyledLinks>
              <KeyboardArrowDownIcon />

              <Popper
                onMouseLeave={handleClose}
                id={id}
                open={open}
                anchorEl={anchorEl}
              >
                <Box
                  sx={{
                    borderRadius: '10px',
                    border: '1px solid red',
                    bgcolor: 'background.paper',
                    width: '800px',
                    height: 'fit-content',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    m: '50px'
                  }}
                >
                  <Box sx={{ width: '25%', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Category 1
                    </Typography>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li>
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Box>
                  <Box sx={{ width: '25%', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Category 2
                    </Typography>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li>
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Box>
                  <Box sx={{ width: '25%', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Category 3
                    </Typography>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li>
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Box>
                  <Box sx={{ width: '25%', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Category 4
                    </Typography>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li>
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Box>
                  <Box sx={{ width: '25%', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Category 4
                    </Typography>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li>
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Box>
                  <Box sx={{ width: '25%', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Category 4
                    </Typography>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li>
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Popper>
            </Box>
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
                onMouseOver={handleOpen2}
                onMouseLeave={handleClose2}
              >
                Clients
              </StyledLinks>
              <KeyboardArrowDownIcon />
              <Popper
                id={id2}
                open={open2}
                anchorEl={anchorEl2}
                onMouseLeave={handleClose2}
              >
                <Box
                  sx={{
                    border: 1,
                    p: 1,
                    bgcolor: 'background.paper',
                    width: '350px',
                    height: '200px',
                    m: '50px'
                  }}
                >
                  The content of the Popper.
                </Box>
              </Popper>
            </Box>
            <StyledLinks href="#">About us</StyledLinks>
          </StyledMenuLink>
          <StyledContact>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#fffd82', boxShadow: 0, color: 'black' }}
            >
              Get Started
            </Button>
          </StyledContact>
        </StyledAppToolbar>
      </StyledAppBar>
    </>

    // </Box>
  );
}

export default NavigationBar;
