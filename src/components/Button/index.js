import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

export default function Button({ text, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: 'Search',
};
