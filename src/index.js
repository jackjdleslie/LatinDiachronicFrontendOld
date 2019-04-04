import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage, SearchPage, ResultsPage } from './pages';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { AppContext } from './context';
import { useCount, useAuthors, useSync, useSearch } from './hooks';

function Index() {
  const count = useCount();
  const [authors, authorsCount] = useAuthors();
  const isSynced = useSync();
  const [results, search] = useSearch();

  return (
    <AppContext.Provider
      value={{
        lemmataCount: count,
        authorsCount: authorsCount,
        authors: authors,
        isSynced: isSynced,
        search: search,
        results: results,
      }}
    >
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/search/lemmata"
          render={({ ...props }) => <SearchPage type="lemmata" {...props} />}
        />
        <Route
          path="/search/intersection"
          render={({ ...props }) => (
            <SearchPage type="intersection" {...props} />
          )}
        />
        <Route
          path="/results/:type"
          render={({ ...props }) => <ResultsPage {...props} />}
        />
      </Router>
    </AppContext.Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
