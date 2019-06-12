import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Err from './Components/Err';
import Navigation from './Components/Navigation';
import Test3 from './Components/Home/test.3';

function App() {
  return (
    <HashRouter>
      <Test3 />
      <Navigation />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Err} />
      </Switch>
    </HashRouter>
  );
}

export default App;
