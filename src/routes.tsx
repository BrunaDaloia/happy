import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import landing from './pages/landing';
import orphanagesMap from './pages/orphanagesMap';

function Routes() {
  return (
  <BrowserRouter>
  <Switch>
  <Route path="/" exact component={landing} />
  <Route path="/app" component={orphanagesMap} />
  </Switch>
  </BrowserRouter>
  );
}

export default Routes;