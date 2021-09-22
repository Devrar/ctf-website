import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import RSA from './pages/rsa';
import SwipeableTemporaryDrawer from './components/drawer'


function App() {
  return (
    <React.StrictMode>
      <Router>
        <SwipeableTemporaryDrawer />
        <Route exact path="/" component={Home}/>
        <Route path="/rsa" component={RSA}/>
      </Router>
    </React.StrictMode>
  );
}

export default App;
