import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn } from '../../../actions';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import bearFace from '../../../assets/images/bear-face.svg';

import * as styles from './styles.module.scss';

const LogIn = ({ onLogIn }) => {
  return (
    <div className={styles.login}>
      <Form className={styles.form}>
        <img alt="bear" src={bearFace} className={styles.icon} />
        <Button color="white" onClick={onLogIn}>
          Let me in
        </Button>
      </Form>
    </div>
  );
}

LogIn.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  { onLogIn: logIn },
)(LogIn);