import React from 'react';
import PropTypes from 'prop-types';

import styles from './jumbo.module.css';

export default function Header({ title, children, ...props }) {
  return (
    <div className={styles.jumbo} {...props}>
      <h1 className={styles.jumboTitle}>{title}</h1>
      <p className={styles.jumboText}>{children}</p>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
