import React from 'react';
import PropTypes from 'prop-types';

import styles from './checkbox.module.css';

export default function Checkbox({ label, ...props }) {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" {...props} />
      <label className={styles.label} htmlFor={props.id}>
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};
