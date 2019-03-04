import React from 'react';
import PropTypes from 'prop-types';

import styles from './status.module.css';

export default function Status({ text }) {
  return (
    <div className={styles.status}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

Status.propTypes = {
  text: PropTypes.string.isRequired,
};
