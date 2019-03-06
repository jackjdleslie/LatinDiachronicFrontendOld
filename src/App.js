import React from 'react';

import Header from './components/Header';
import Status from './components/Status';
import Title from './components/Title';
import Footer from './components/Footer';
import Jumbo from './components/Jumbo';

import Lemmata from './containers/Lemmata';
import Intersection from './containers/Intersection';

import useSync from './hooks/useSync';

export default function App() {
  const isSynced = useSync();

  return (
    <div style={{ margin: '0 auto', maxWidth: '920px' }}>
      <Header>
        <Title text="Latin Diachronic Analysis" />
        <Status text={isSynced ? 'Online' : 'Offline'} />
      </Header>
      <Jumbo title="An innovative toolkit for the quantitative computational analysis of the Latin language">
        This project revolves around allowing for a flexible and easy to use
        interface to run quantitative queries on Latin literature. In
        particular, we focus on providing a tool for statistical computational
        analysis of the Latin language, diachronic frequency analysis and aid
        for digital intertextual source.
      </Jumbo>
      <Lemmata />
      <Intersection />
      <Footer />
    </div>
  );
}
