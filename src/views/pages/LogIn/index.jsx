import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { requestLogIn } from '../../../actions';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import bearFace from '../../../assets/images/bear-face.svg';

import * as styles from './styles.module.scss';

const LogIn = (props) => {
  if (props.isAuthentificated) {
    console.log('props', props);
    props.history.push('/');
  }

  return (
    <Form className={styles.form}>
      <img alt="bear" src={bearFace} className={styles.icon} />
      <Button color="white" onClick={props.onLogIn}>
        Let me in
      </Button>
    </Form>
  );
}

LogIn.propTypes = {
  onLogIn: PropTypes.func.isRequired,
};

export default withRouter(connect(
  (state) => ({isAuthentificated: state.user.isAuthentificated}),
  { onLogIn: requestLogIn },
)(LogIn));