import * as React from 'react';
import Header from './components/Header';
import * as styles from './styles.module.scss';

const Layout = (props) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.main}>
      {props.children}
    </div>
  </div>
);

export default Layout;
