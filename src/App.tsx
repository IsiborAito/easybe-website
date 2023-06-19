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
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { EasyBeContext } from './utilities/context';
import { useMediaQuery } from '@mui/material';
import { ServiceData } from './utilities/data';

const location = new ReactLocation({});

const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '/',
        element: (
          <Shell>
            <Home />
          </Shell>
        )
      },
      {
        path: '/contact-us',
        element: (
          <Shell>
            <Contact />
          </Shell>
        )
      },
      {
        path: '/clients',
        element: (
          <Shell>
            <ClientPage />
          </Shell>
        )
      },
      {
        path: '/policies',
        element: (
          <Shell>
            <PolicyPage />
          </Shell>
        )
      },
      {
        path: '/about-us',
        element: (
          <Shell>
            <AboutUs />
          </Shell>
        )
      },
      {
        path: '/why-us',
        element: (
          <Shell>
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
                <Service service={ServiceData.software} />
              </Shell>
            )
          },
          {
            path: '/mobile-development',
            element: (
              <Shell>
                <Service service={ServiceData.mobile} />
              </Shell>
            )
          },
          {
            path: '/web-development',
            element: (
              <Shell>
                <Service service={ServiceData.web} />
              </Shell>
            )
          },
          {
            path: '/software-maintenance',
            element: (
              <Shell>
                <Service service={ServiceData.maintenance} />
              </Shell>
            )
          },
          {
            path: '/staff-augmentation',
            element: (
              <Shell>
                <Service service={ServiceData.staff} />
              </Shell>
            )
          },
          {
            path: '/hire-development-teams',
            element: (
              <Shell>
                <Service service={ServiceData.devTeams} />
              </Shell>
            )
          },
          {
            path: '/cybersecurity-consultancy',
            element: (
              <Shell>
                <Service service={ServiceData.security} />
              </Shell>
            )
          },
          {
            path: '/quality-assurance-testing',
            element: (
              <Shell>
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
      <EasyBeContext.Provider value={{ isMobile, currLocation }}>
        <Router location={location} routes={routes} />
      </EasyBeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
