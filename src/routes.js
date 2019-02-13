import * as React from 'react';
import { Router, Route } from 'react-router';

import Layout from './views/layout';
import LogIn from './views/pages/LogIn';

const Routes = ({history}) => (
  <Router history={history}>
    <Layout>
      <Route path="/login" component={LogIn} />
    </Layout>
  </Router>
);

export default Routes;
