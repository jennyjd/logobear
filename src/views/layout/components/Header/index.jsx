import React from 'react';
import logo from '../../../../assets/images/logo.svg';
import * as styles from './styles.module.scss';

const Logo = () => (
  <img alt="logobear" src={logo} className={styles.logo} />
);

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}

export default Header;