import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import * as styles from './styles.module.scss';

const Button = (props) => {
  const classNames = cn(styles.button, {
    [styles.button_purple]: props.color === 'purple',
    [styles.button_white]: props.color === 'white',
  })
  return (
    <button className={classNames} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['purple', 'white']),
  onClick: PropTypes.func,
};

export default Button;