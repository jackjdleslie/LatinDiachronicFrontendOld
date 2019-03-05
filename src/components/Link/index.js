import React from 'react';
import PropTypes from 'prop-types';

import styles from './link.module.css';

export default function Link({ text, link }) {
  return (
    <a className={styles.link} href={link}>
      {text}
    </a>
  );
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
