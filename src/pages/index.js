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
  const [lemmaToSearch, setLemmaToSearch] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header>Latin Diachronic Analysis</Header>
        <AuthorSearch authors={authors} onUpdate={setAuthorsToSearch} />
        <LemmaSearch onUpdate={setLemmaToSearch} />
        <Link
          to="/results"
          className={styles.link}
          state={{ authors: authorsToSearch, lemma: lemmaToSearch }}
        >
          <Button />
        </Link>
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
