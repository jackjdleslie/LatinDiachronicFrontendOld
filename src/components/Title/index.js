import React from 'react';
import PropTypes from 'prop-types';

import styles from './title.module.css';

export default function Title({ text, ...props }) {
  return (
    <h1 className={styles.title} {...props}>
      {text}
    </h1>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
