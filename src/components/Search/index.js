import React, { useState } from 'react';

import useLemma from '../../hooks/useLemma';

import Subtitle from '../Subtitle';

import styles from './search.module.css';

import useCount from '../../hooks/useCount';

export default function Search({ ...props }) {
  const [state, setState] = useState('interdum');
  const [lemmata, getLemmata] = useLemma(state);
  const count = useCount();

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Subtitle
          text={`Search for occurences of lemmata in ${count} records`}
        />
        <div className={styles.searchForm}>
          <input
            className={styles.searchFormInput}
            type="text"
            name="first"
            placeholder="e.g interdum"
            onChange={setState}
          />
          <button
            className={styles.searchFormButton}
            onClick={() => getLemmata(state)}
          >
            Search
          </button>
        </div>
      </div>
      {lemmata && lemmata.map(result => <h1>Hello</h1>)}
    </div>
  );
}
