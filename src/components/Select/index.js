import React from 'react';
import PropTypes from 'prop-types';

import styles from './select.module.css';

export default function Select({ children, ...props }) {
  return (
    <select className={styles.select} {...props}>
      {children}
    </select>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
};
