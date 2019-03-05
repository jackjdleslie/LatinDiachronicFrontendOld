import React from 'react';

import Subtitle from '../../components/Subtitle';

import styles from './results.module.css';

export default function Results({ results, type }) {
  return (
    results && (
      <div className={styles.results}>
        {type === 'lemma' && results.forms && (
          <>
            <Subtitle text="Results" />
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
            <Subtitle text="Results" />
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
            <Subtitle text={`${results.length} Results`} />
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
      </div>
    )
  );
}
