import React from 'react';
import './App.css';
import Shell from './components/shell/shell';
import { ReactLocation, Route, Router } from '@tanstack/react-location';
import Home from './components/home/home';
import ServiceDescription from './components/service/serviceDescription';
import NavigationBar from './components/shell/navigation-bar';

const location = new ReactLocation({});

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
            element: <ServiceDescription />
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
        element: <h1>About Us</h1>
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
];

function App() {
  return (
    <Router location={location} routes={routes}>
      <NavigationBar />
      {/* <Outlet /> */}
      <Shell />
    </Router>
  );
}

export default App;
