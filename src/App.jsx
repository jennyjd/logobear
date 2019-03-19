import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';

import Layout from './views/layout';
import LogIn from './views/pages/LogIn';
import { requestGetUser } from './actions/index';
import PrivateRoute from './components/PrivateRoute';
import Main from './views/pages/Main';

class App extends React.Component {
  componentDidMount() {
    setTimeout(this.props.getUser, 2000);
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <PrivateRoute exact path="/" component={Main} />
        </Switch>
      </Layout>
    );
  }
};

export default withRouter(connect(
  (state) => ({
    isAuthentificated: state.user.isAuthentificated,
    userIsLoading: state.user.loading,
  }),
  { getUser: requestGetUser }
)(App));
