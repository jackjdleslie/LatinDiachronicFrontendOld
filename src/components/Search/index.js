import React from 'react';
import PropTypes from 'prop-types';

import styles from './search.module.css';

export default function Search({ children, ...props }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

Search.propTypes = {
  children: PropTypes.node.isRequired,
};
