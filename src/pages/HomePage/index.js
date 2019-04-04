import React, { useState, useContext } from 'react';

import { Header, Status, Title, Footer, Jumbo, Block } from '../../components';

import { Lemmata, Intersection } from '../../containers';

import styles from './home.module.css';

import { AppContext } from '../../context';

export default function HomePage({ history }) {
  const { isSynced } = useContext(AppContext);
  const [defaultType, setDefaultType] = useState(true);

  return (
    <div className={styles.container}>
      <Header>
        <Title
          text="Latin Diachronic Analysis"
          onClick={() => history.push('/')}
        />
        <Status text={isSynced ? 'Online' : 'Offline'} />
      </Header>
      <Jumbo title="An innovative toolkit for the quantitative computational analysis of the Latin language">
        This project revolves around allowing for a flexible and easy to use
        interface to run quantitative queries on Latin literature. In
        particular, we focus on providing a tool for statistical computational
        analysis of the Latin language, diachronic frequency analysis and aid
        for digital intertextual source.
      </Jumbo>
      <div className={styles.tabs}>
        <div
          className={defaultType ? styles.selected : styles.tab}
          onClick={() => setDefaultType(true)}
        >
          Lemmata
        </div>
        <div
          className={!defaultType ? styles.selected : styles.tab}
          onClick={() => setDefaultType(false)}
        >
          Intersection
        </div>
      </div>
      <Block>
        {defaultType ? (
          <Lemmata history={history} />
        ) : (
          <Intersection history={history} />
        )}
      </Block>
      <Footer />
    </div>
  );
}
