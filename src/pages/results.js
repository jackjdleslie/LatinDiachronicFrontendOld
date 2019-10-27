import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Header } from '../components';

import styles from './index.module.css';

export default ({
  location: {
    state: { authors = [], lemma = '' },
  },
}) => {
  const APOLLO_QUERY = gql`
    {
      latin {
        lemma(lemma: "${lemma}") {
          occurrences {
            line
          }
        }
      }
    }
  `;
  const [result] = useQuery(APOLLO_QUERY);
  console.warn(result);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header>Latin Diachronic Analysis</Header>
        <p>{authors}</p>
        <p>{lemma}</p>
      </div>
    </div>
  );
};
