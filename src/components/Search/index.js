import React from 'react';

import Subtitle from '../Subtitle';

import styles from './search.module.css';

export default function Search({ ...props }) {
  const count = '1,239,971';
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
            placeholder="first"
          />
          <input
            className={styles.searchFormInput}
            type="text"
            name="second"
            placeholder="second"
          />
          <input
            className={styles.searchFormInput}
            type="text"
            name="third"
            placeholder="third"
          />
        </div>
      </div>
    </div>
  );
}
