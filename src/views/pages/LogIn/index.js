import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn } from '../../../actions';
import Button from '../../../components/Button';
import bearFace from '../../../assets/images/bear-face.svg';

import * as styles from './styles.module.scss';

const LogIn = ({ onLogIn }) => {
  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <img alt="bear" src={bearFace} className={styles.icon} />
        <Button color="white" onClick={onLogIn}>
          Let me in
        </Button>
      </div>
    </div>
  );
}

LogIn.propTypes = {
  logIn: PropTypes.func,
};

export default connect(
  () => ({}),
  { onLogIn: logIn },
)(LogIn);