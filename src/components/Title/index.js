import React from 'react';
import PropTypes from 'prop-types';

import styles from './title.module.css';

export default function Title({ text }) {
  return <h1 className={styles.title}>{text}</h1>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
