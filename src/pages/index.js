import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';

import { AuthorSearch, LemmaSearch, Button, Header } from '../components';
import styles from './index.module.css';

export default ({
  data: {
    latin: { authors },
  },
}) => {
  const [authorsToSearch, setAuthorsToSearch] = useState([]);
  const [lemmaToSearch, setLemmaToSearch] = useState('');

  const isDisabled =
    (!authorsToSearch.length && !lemmaToSearch) ||
    (authorsToSearch.length === 1 && !lemmaToSearch);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header
          subtitle="An innovative toolkit for the quantitative computational analysis of
          the Latin language"
        >
          Latin Diachronic Analysis
        </Header>
        <AuthorSearch authors={authors} onUpdate={setAuthorsToSearch} />
        <LemmaSearch onUpdate={setLemmaToSearch} />
        {isDisabled ? (
          <div className={styles.link}>
            <Button disabled />
          </div>
        ) : (
          <Link
            to="/results"
            className={styles.link}
            state={{ authors: authorsToSearch, lemma: lemmaToSearch }}
          >
            <Button />
          </Link>
        )}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    latin {
      authors {
        name
      }
    }
  }
`;
