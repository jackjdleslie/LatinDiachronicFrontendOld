import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './header.module.css';

export default function Header({ subtitle, children }) {
  return (
    <Link to="/" className={styles.header}>
      <h1 className={styles.title}>{children}</h1>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </Link>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  subtitle: '',
};
