import React from 'react';
import Shell from './components/shell';
import WhyUs from './components/whyUs';
import Contact from './components/contactUs';
import AboutUs from './components/aboutUs';
import { ReactLocation, Route, Router } from '@tanstack/react-location';
import './App.css';

const location = new ReactLocation({});

const routes: Route[] = [
  {
    path: '',
    children: [
      { path: '/why-us', element: <WhyUs /> },
      {
        path: '/contact-us',
        element: (
          <Shell>
            <Contact />
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
      }
    ]
  }
];

function App() {
  return <Router location={location} routes={routes} />;
}

export default App;
