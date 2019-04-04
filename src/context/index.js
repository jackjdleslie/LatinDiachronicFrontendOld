import { createContext } from 'react';

const AppContext = createContext({
  lemmataCount: 0,
  authorsCount: 0,
  authors: null,
  isSynced: false,
  search: null,
  results: null,
});

export { AppContext };
