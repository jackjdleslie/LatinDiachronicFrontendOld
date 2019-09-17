import React from 'react';
import PropTypes from 'prop-types';

import styles from './author.module.css';

export default function Author({ children, close, ...props }) {
  return (
    <div className={styles.author} {...props}>
      {children}
      <span className={styles.close} onClick={close}>
        ✕
      </span>
    </div>
  );
}

Author.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};
