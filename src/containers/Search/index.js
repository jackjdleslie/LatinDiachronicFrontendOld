import React, { useState } from 'react';

import useLemma from '../../hooks/useLemma';

import Subtitle from '../../components/Subtitle';

import Results from '../Results';

import styles from './search.module.css';

import useCount from '../../hooks/useCount';

export default function Search({ ...props }) {
  const [text, setText] = useState('');
  const [lemmata, getLemmata, clearLemmata] = useLemma(null);
  const [select, setSelect] = useState('lemma');
  const count = useCount();

  function clear() {
    clearLemmata();
    setText('');
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Subtitle
          text={`Search for occurences of lemmata in ${count} records`}
        />
        <div className={styles.searchForm}>
          <select
            className={styles.searchFormSelect}
            name="searchOptions"
            onChange={e => {
              setSelect(e.target.value);
              clearLemmata();
            }}
          >
            <option value="lemma">Lemma</option>
            <option value="form">Form</option>
            <option value="match">Match Form</option>
            <option value="find">Find Lemma</option>
          </select>
          <input
            className={styles.searchFormInput}
            type="text"
            name="lemmaSearch"
            placeholder={
              select === 'lemma' || select === 'find'
                ? 'e.g interdum'
                : 'e.g interdumque'
            }
            onChange={e => setText(e.target.value)}
            value={text}
          />
          <button
            className={styles.searchFormButton}
            onClick={() => getLemmata(text, select)}
            disabled={text.length === 0}
          >
            Search
          </button>
        </div>
      </div>
      <Results results={lemmata} type={select} clear={clear} />
    </div>
  );
}
