import React from 'react';
import Shell from './components/shell';
import Contact from './components/contactUs';
import ClientPage from './components/client';
import PolicyPage from './components/policies';
import { ReactLocation, Route, Router } from '@tanstack/react-location';
import Home from './components/home/home';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

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
      }
    ]
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router location={location} routes={routes} />
    </ThemeProvider>
  );
}

export default App;
