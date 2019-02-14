import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';

import Layout from './views/layout';
import LogIn from './views/pages/LogIn';

const Routes = ({history}) => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Redirect from="*" to="/login" />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
