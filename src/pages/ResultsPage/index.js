import React, { useContext } from 'react';

import { Header, Status, Title, Footer } from '../../components';

import Results from '../../containers/Results';

import { AppContext } from '../../context';

import styles from './results.module.css';

export default function ResultsPage({ match, history, ...props }) {
  const { isSynced, results } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Header>
        <Title
          text="Latin Diachronic Analysis"
          onClick={() => history.push('/')}
        />
        <Status text={isSynced ? 'Online' : 'Offline'} />
      </Header>
      <Results results={results} type={match.params.type} />
      <Footer />
    </div>
  );
}
