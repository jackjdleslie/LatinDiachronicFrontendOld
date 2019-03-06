import React from 'react';

import styles from './textinput.module.css';

export default function TextInput({ ...props }) {
  return <input type="text" className={styles.input} {...props} />;
}
