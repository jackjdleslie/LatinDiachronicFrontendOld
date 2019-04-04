import React from 'react';

import { Subtitle } from '../../components';

import styles from './results.module.css';

export default function Results({ results, type, clear }) {
  return (
    results && (
      <div className={styles.results}>
        {type === 'lemma' && results.forms && (
          <>
            <div className={styles.resultsTitle}>
              <Subtitle text="Results" />
              <button className={styles.resultsClear} onClick={clear}>
                Clear
              </button>
            </div>
            {Object.entries(results.forms).map(([lemma, occurences]) => (
              <p
                className={styles.resultsText}
                key={lemma}
              >{`${lemma}: ${occurences}`}</p>
            ))}
            {Object.entries(results.forms).length > 0 && (
              <p className={styles.resultsForms}>{`${
                Object.entries(results.forms).length
              } ${
                Object.entries(results.forms).length === 1 ? 'form' : 'forms'
              } of ${results.lemma}`}</p>
            )}
            <p className={styles.resultsTotal}>{`${
              results.total
            } occurences of ${results.lemma}`}</p>
          </>
        )}
        {type === 'form' && results.form && (
          <>
            <div className={styles.resultsTitle}>
              <Subtitle text="Results" />
              <button className={styles.resultsClear} onClick={clear}>
                Clear
              </button>
            </div>
            {results.lemmas.map((lemma, index) => (
              <p className={styles.resultsText} key={index}>
                {`Resolves to ${lemma}`}
              </p>
            ))}
            <p className={styles.resultsTotal}>{`${
              results.total
            } occurences of ${results.form}`}</p>
          </>
        )}
        {(type === 'match' || type === 'find') && (
          <>
            <div className={styles.resultsTitle}>
              <Subtitle text={`${results.length} Results`} />
              <button className={styles.resultsClear} onClick={clear}>
                Clear
              </button>
            </div>
            {results.map((occurence, index) => (
              <div key={index}>
                <p className={styles.resultsText}>
                  {`${occurence.text} by ${occurence.author}`}
                </p>
                <p className={styles.resultsLine}>{`"${occurence.line}"`}</p>
              </div>
            ))}
          </>
        )}
        {type === 'intersection' && (
          <>
            <div className={styles.resultsTitle}>
              <Subtitle text={`${results.length} Results`} />
              <button className={styles.resultsClear} onClick={clear}>
                Clear
              </button>
            </div>
            {results.map(lemma => (
              <p key={lemma} className={styles.resultsText}>
                {lemma}
              </p>
            ))}
          </>
        )}
      </div>
    )
  );
}
