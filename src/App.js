import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import About from './Components/newAbout';
import Contact from './Components/Contact';
import Err from './Components/Err';
import Navigation from './Components/Navigation';
import HireMe from './Components/newContact';
import Cube from './Components/newPortfolio/Cube';
// import Test3 from './Components/Home/test.3';

function App() {
  return (
    <HashRouter>
      {/* <Test3 /> */}
      <Navigation />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={HireMe} />
        <Route path='/contact2' component={Contact} />
        <Route path='/cube' component={Cube} />
        <Route component={Err} />
      </Switch>
    </HashRouter>
  );
}

export default App;
