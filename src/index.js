import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, createClient } from 'urql';

import { HomePage, ResultsPage } from './pages';
import * as serviceWorker from './serviceWorker';
import './index.css';

const client = createClient({
  url: process.env.REACT_APP_LATIN_DIACHRONIC_API_URL,
});

function Index() {
  return (
    <Provider value={client}>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/results/:type"
          render={({ ...props }) => <ResultsPage {...props} />}
        />
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
