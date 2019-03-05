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
        <Link
          text="About"
          link="https://github.com/WizardOfMenlo/LatinDiachronicDatabase#readme"
        />
        <Link text="Data" link="#" />
        <Link text="Contact" link="#" />
      </div>
    </div>
  );
}
