import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import * as serviceWorker from './serviceWorker';
import './index.css';
import AppContext from './context';
import useCount from './hooks/useCount';
import useAuthors from './hooks/useAuthors';
import useSync from './hooks/useSync';

function Index() {
  const count = useCount();
  const [authors, authorsCount] = useAuthors();
  const isSynced = useSync();

  return (
    <AppContext.Provider
      value={{
        lemmataCount: count,
        authorsCount: authorsCount,
        authors: authors,
        isSynced: isSynced,
      }}
    >
      <Router>
        <Route path="/" exact component={Home} />
        <Route
          path="/search/lemmata"
          render={({ ...props }) => <Search type="lemmata" {...props} />}
        />
        <Route
          path="/search/intersection"
          render={({ ...props }) => <Search type="intersection" {...props} />}
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
