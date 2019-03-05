import React from 'react';

import Link from '../Link';

import styles from './footer.module.css';

export default function Footer({ children, ...props }) {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>Open Source</p>
      <div className={styles.footerList}>
        <Link text="About" link="/about" />
        <Link text="API" link="/api" />
        <Link text="Contact" link="/contact" />
      </div>
    </div>
  );
}
