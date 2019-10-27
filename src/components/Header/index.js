import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './header.module.css';

export default function Header({ children }) {
  return (
    <Link to="/">
      <h1 className={styles.header}>{children}</h1>
    </Link>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
