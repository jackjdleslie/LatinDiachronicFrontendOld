import React from 'react';
import PropTypes from 'prop-types';

import styles from './subtitle.module.css';

export default function Subtitle({ text }) {
  return <h2 className={styles.subtitle}>{text}</h2>;
}

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};
