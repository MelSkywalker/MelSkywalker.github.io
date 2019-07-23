import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/nHome';
import Portfolio from './Components/nPortfolio';
import Err from './Components/Err';
import Navigation from './Components/Navigation';
import HireMe from './Components/nContact';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={HireMe} />
        <Route component={Err} />
      </Switch>
    </HashRouter>
  );
}

export default App;
