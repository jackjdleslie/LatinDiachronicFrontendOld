import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.module.css';

export default function Header({ children, ...props }) {
  return <div className={styles.header}>{children}</div>;
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
