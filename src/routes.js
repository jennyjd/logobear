import * as React from 'react';
import { Router } from 'react-router';

import Layout from './views/layout';

const Routes = ({history}) => (
  <Router history={history}>
    <Layout>
    </Layout>
  </Router>
);

export default Routes;
