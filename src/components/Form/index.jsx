import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import closeIcon from '../../assets/images/close.svg';
import * as styles from './styles.module.scss';

const Form = (props) => {
  return (
    <div className={cn(styles.form, props.className)}>
      {props.closeIcon && (
        <img alt="X" src={closeIcon} className={styles.close} />
      )}
      {props.children}
    </div>
  );
}

Form.propTypes = {
  closeIcon: PropTypes.bool,
  className: PropTypes.string,
};

Form.defaultProps = {
  closeIcon: false,
};


export default Form;
