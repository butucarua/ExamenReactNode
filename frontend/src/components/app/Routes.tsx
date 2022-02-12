import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { RoutePath } from '../../config/route-config';
import { Films } from 'components/films/Films'

export const routesTestId = 'RoutesComponent';

export const Routes = () => (
  <div data-testid={routesTestId}>
    <Switch>
      <Route exact path={RoutePath.Index}>
        <Films/>
      </Route>

      <Route path={RoutePath.Index}>
        <Redirect to={RoutePath.Index}/>
      </Route>
    </Switch>
  </div>
);
