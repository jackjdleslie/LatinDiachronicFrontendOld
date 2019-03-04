import React from 'react';

import Header from './components/Header';
import Status from './components/Status';
import Title from './components/Title';
import Search from './components/Search';

import useSync from './hooks/useSync';

export default function App() {
  const isSynced = useSync();

  return (
    <div>
      <Header>
        <Title text="Latin Diachronic Analysis" />
        <Status text={isSynced ? 'Online' : 'Offline'} />
      </Header>
      <Search />
    </div>
  );
}
