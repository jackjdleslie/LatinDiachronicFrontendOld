import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

export default function Button({ children, nomargin, ...props }) {
  return (
    <button
      className={nomargin ? styles.buttonNoMargin : styles.button}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  nomargin: PropTypes.bool,
};

Button.defaultProps = {
  nomargin: false,
};
