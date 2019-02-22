import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthentificated, ...args }) => {
  return (
    <Route {...args} render={(props) => (
      isAuthentificated ? <Component {...props} /> : <Redirect to="/login" />
    )}/>
  );
};

export default connect(
  (state) => ({isAuthentificated: state.user.isAuthentificated}),
  {}
)(PrivateRoute);

