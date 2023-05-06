import React from 'react';
import Shell from './components/shell';
import Contact from './components/contactUs';
import ClientPage from './components/client';
import PolicyPage from './components/policies';
import { ReactLocation, Route, Router } from '@tanstack/react-location';
import './App.css';

const location = new ReactLocation({});

const routes: Route[] = [
  {
    path: '',
    children: [
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
  return <Router location={location} routes={routes} />;
}

export default App;
