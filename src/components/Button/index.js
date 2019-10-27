import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

export default function Button({ text, disabled, ...props }) {
  return (
    <button
      className={disabled ? styles.buttonDisabled : styles.button}
      {...props}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  text: 'Search',
  disabled: false,
};
