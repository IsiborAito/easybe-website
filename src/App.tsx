import React from 'react';
import Shell from './components/shell';
import Contact from './components/contactUs';
import ClientPage from './components/client';
import PolicyPage from './components/policies';
import AboutUs from './components/aboutUs';
import WhyUs from './components/whyUs';
import Service from './components/services';
import { ReactLocation, Route, Router } from '@tanstack/react-location';
import Home from './components/home/home';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { EasyBeContext } from './utilities/context';
import { useMediaQuery } from '@mui/material';
import { ServiceData } from './utilities/data';
import LinkToTop from './utilities/LinkToTop';

const location = new ReactLocation({});

const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '/',
        element: (
          <Shell>
            <LinkToTop location={location} />
            <Home />
          </Shell>
        )
      },
      {
        path: '/contact-us',
        element: (
          <Shell>
            <LinkToTop location={location} />
            <Contact />
          </Shell>
        )
      },
      {
        path: '/clients',
        element: (
          <Shell>
            <LinkToTop location={location} />
            <ClientPage />
          </Shell>
        )
      },
      {
        path: '/policies',
        element: (
          <Shell>
            <LinkToTop location={location} />
            <PolicyPage />
          </Shell>
        )
      },
      {
        path: '/about-us',
        element: (
          <Shell>
            <LinkToTop location={location} />
            <AboutUs />
          </Shell>
        )
      },
      {
        path: '/why-us',
        element: (
          <Shell>
            <LinkToTop location={location} />
            <WhyUs />
          </Shell>
        )
      },
      {
        path: '/services',
        children: [
          {
            path: '/software-development',
            element: (
              <Shell>
                <LinkToTop location={location} />
                <Service service={ServiceData.software} />
              </Shell>
            )
          },
          {
            path: '/mobile-development',
            element: (
              <Shell>
                <LinkToTop location={location} />
                <Service service={ServiceData.mobile} />
              </Shell>
            )
          },
          {
            path: '/web-development',
            element: (
              <Shell>
                <LinkToTop location={location} />
                <Service service={ServiceData.web} />
              </Shell>
            )
          },
          {
            path: '/software-maintenance',
            element: (
              <Shell>
                <LinkToTop location={location} />
                <Service service={ServiceData.maintenance} />
              </Shell>
            )
          },
          {
            path: '/staff-augmentation',
            element: (
              <Shell>
                <LinkToTop location={location} />
                <Service service={ServiceData.staff} />
              </Shell>
            )
          },
          {
            path: '/hire-development-teams',
            element: (
              <Shell>
                <LinkToTop location={location} />
                <Service service={ServiceData.devTeams} />
              </Shell>
            )
          },
          {
            path: '/cybersecurity-consultancy',
            element: (
              <Shell>
                <LinkToTop location={location} />
                <Service service={ServiceData.security} />
              </Shell>
            )
          },
          {
            path: '/quality-assurance-testing',
            element: (
              <Shell>
                <LinkToTop location={location} />
                <Service service={ServiceData.testing} />
              </Shell>
            )
          }
        ]
      }
    ]
  }
];

function App() {
  const uiTheme = useTheme();
  const isMobile = useMediaQuery(uiTheme.breakpoints.down('md'));
  const currLocation = location.current.pathname;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EasyBeContext.Provider value={{ isMobile, currLocation }}>
        <Router location={location} routes={routes} />
      </EasyBeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
