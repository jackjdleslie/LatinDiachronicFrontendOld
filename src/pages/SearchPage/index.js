import React, { useContext } from 'react';

import { Header, Status, Title, Footer } from '../../components';
import { Lemmata, Intersection } from '../../containers';
import { AppContext } from '../../context';

import styles from './search.module.css';

export default function SearchPage({ type, history, ...props }) {
  const { isSynced } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Header>
        <Title
          text="Latin Diachronic Analysis"
          onClick={() => history.push('/')}
        />
        <Status text={isSynced ? 'Online' : 'Offline'} />
      </Header>
      {type === 'lemmata' ? (
        <Lemmata history={history} />
      ) : (
        <Intersection history={history} />
      )}
      <Footer />
    </div>
  );
}
