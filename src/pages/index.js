import React from 'react';
import { graphql } from 'gatsby';

import { Search } from '../components';
import styles from './index.module.css';

export default ({
  data: {
    latin: { authors },
  },
}) => (
  <div className={styles.container}>
    <div className={styles.main}>
      <h1 className={styles.header}>Latin Diachronic Analysis</h1>
      <Search authors={authors} />
    </div>
  </div>
);

export const query = graphql`
  query {
    latin {
      authors {
        name
      }
    }
  }
`;
