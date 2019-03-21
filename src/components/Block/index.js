import React from 'react';
import PropTypes from 'prop-types';

import styles from './block.module.css';

export default function Block({ children, ...props }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
};
