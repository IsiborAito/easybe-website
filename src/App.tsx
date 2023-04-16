import React from 'react';
import WhyUs from "./components/whyUs";
import { ReactLocation, Route, Router } from '@tanstack/react-location'
import './App.css';

const location = new ReactLocation({});

const routes: Route[] = [
  {
    path: '',
    children: [
      {path: '/why-us',
      element: <WhyUs/>}
    ]
  }
]

function App() {
  return (
    <Router location={location} routes={routes}/>
  );
}

export default App;
