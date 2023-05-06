import React from 'react';
import Shell from './components/shell';
import Contact from './components/contactUs';
import ClientPage from './components/client';
import PolicyPage from './components/policies';
import { ReactLocation, Route, Router } from '@tanstack/react-location';
import './App.css';
import Shell from './components/shell/shell';
import { ReactLocation, Route, Router } from '@tanstack/react-location'
import Home from './components/home/home';

const location = new ReactLocation({})

const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/service',
        children: [
          {
            path: '/',
            element: <h1>Service</h1>
            // <Service />
          },
          {
            path: 'serviceDescription',
            element: <h1>Service Description</h1>
            // <ServiceDescription />
          }
        ]
      },
      {
        path: '/about-us',
        element:<h1>About Us</h1>
        //  <AboutUs />
      },
      {
        path: '/contact-us',
        element: <h1>Contact</h1>
        // <ContactUs />
      },
      {
        path: '/why-us',
        element: <h1>Why us</h1>
        //  <WhyUs />
      },
      {
        path: '/get-started',
        element: <h1>Get started</h1>
        // <GetStarted />
      },
      {
        path: '/client',
        children: [
          {
            path: '/',
            element: <h1>Client</h1>
            // <Client />
          },
          {
            path: 'clientDescription',
            element: <h1>Client Description</h1>
            // <ClientDescription />
          }
        ]
      }
    ]
  }
]


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
