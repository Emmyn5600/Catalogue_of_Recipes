import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import Tutorial from './tutorial';
import Order from './order';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/tutorial" component={Tutorial} />
      <Route exact path="/order" component={Order} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
