import React, { useState } from 'react';

import useLemma from '../../hooks/useLemma';

import Subtitle from '../Subtitle';

import styles from './search.module.css';

import useCount from '../../hooks/useCount';

export default function Search({ ...props }) {
  const [state, setState] = useState('');
  const [lemmata, getLemmata] = useLemma(null);
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
            onChange={e => setState(e.target.value)}
          />
          <button
            className={styles.searchFormButton}
            onClick={() => getLemmata(state)}
          >
            Search
          </button>
        </div>
      </div>
      {lemmata && (
        <div className={styles.searchResults}>
          <Subtitle text="Results" />
          {Object.entries(lemmata.forms).map(([lemma, occurences]) => (
            <p
              className={styles.searchResultsText}
              key={lemma}
            >{`${lemma}: ${occurences}`}</p>
          ))}
          {Object.entries(lemmata.forms).length > 0 && (
            <p className={styles.searchResultsForms}>{`${
              Object.entries(lemmata.forms).length
            } ${
              Object.entries(lemmata.forms).length === 1 ? 'form' : 'forms'
            } of ${lemmata.lemma}`}</p>
          )}
          <p className={styles.searchResultsTotal}>{`${
            lemmata.total
          } occurences of ${lemmata.lemma}`}</p>
        </div>
      )}
    </div>
  );
}
