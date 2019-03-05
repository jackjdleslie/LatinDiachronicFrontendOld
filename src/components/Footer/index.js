import React from 'react';

import Link from '../Link';

import styles from './footer.module.css';

export default function Footer({ children, ...props }) {
  return (
    <div className={styles.footer}>
      <Link
        text="Open Source"
        link="https://github.com/WizardOfMenlo/LatinDiachronicDatabase"
      />
      <div className={styles.footerList}>
        <Link text="About" link="/about" />
        <Link text="Data" link="/api" />
        <Link text="Contact" link="/contact" />
      </div>
    </div>
  );
}
