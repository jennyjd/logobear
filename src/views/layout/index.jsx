import * as React from 'react';
import Header from './components/Header';

const Layout = (props) => (
  <>
    <Header />
    {props.children}
  </>
);

export default Layout;
