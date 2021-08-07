import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import Tutorial from './tutorial';
import Order from './order';
import RecipleDetails from '../containers/RecipleDetails';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/recipes/:id" component={RecipleDetails} />
      <Route exact path="/tutorial" component={Tutorial} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
