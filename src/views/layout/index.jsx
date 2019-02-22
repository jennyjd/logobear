import * as React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';

import * as styles from './styles.module.scss';

const Layout = (props) => (
  <>
    <Header />
    <div className={styles.wrapper}>
      {props.isUserLoading ? (
        <p className={styles.loading}>Loading...</p>
      ) :
        props.children
      }
    </div>
  </>
);

export default connect(
  (state) => ({isUserLoading: state.user.loading}),
  {}
)(Layout);
