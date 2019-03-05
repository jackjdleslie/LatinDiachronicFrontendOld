import React from 'react';
import PropTypes from 'prop-types';

import styles from './jumbo.module.css';

export default function Header({ text, ...props }) {
  return (
    <div className={styles.jumbo} {...props}>
      <h1 className={styles.jumboText}>{text}</h1>
    </div>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
