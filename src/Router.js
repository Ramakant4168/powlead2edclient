import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourcePage from './pages/ResourcePage';
import AnchorInfoPage from './pages/AnchorInfoPage'

const Router = () => (
  <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/resource' component={ResourcePage}/>
      <Route path='/info' component={AnchorInfoPage}/>

  </Switch>
)

export default Router;
