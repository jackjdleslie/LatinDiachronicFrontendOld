import React, { useState } from 'react';

import useDetect from '../../hooks/useDetect';

import Subtitle from '../../components/Subtitle';

import Results from '../Results';

import styles from './intersection.module.css';

export default function Intersection({ ...props }) {
  const [text, setText] = useState('');
  const [results, getResults, clearResults] = useDetect(null);

  function clear() {
    clearResults();
    setText('');
  }

  return (
    <div className={styles.container}>
      <div className={styles.intersection}>
        <Subtitle text="Detect intersection of lemmata between a set of authors" />
        <div className={styles.searchForm}>
          <input
            className={styles.searchFormInput}
            type="text"
            name="intersectionSearch"
            placeholder="e.g Marcus Tullius Cicero, Gaius Sallustius Crispus"
            onChange={e => setText(e.target.value)}
            value={text}
          />
          <button
            className={styles.searchFormButton}
            onClick={() => getResults(text)}
            disabled={text.length === 0}
          >
            Search
          </button>
        </div>
      </div>
      <Results results={results} type="intersection" clear={clear} />
    </div>
  );
}
