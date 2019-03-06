import React, { useState } from 'react';

import useDetect from '../../hooks/useDetect';

import Subtitle from '../../components/Subtitle';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Search from '../../components/Search';

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
    <Search>
      <Subtitle text="Detect intersection of lemmata between a set of authors" />
      <div className={styles.searchForm}>
        <TextInput
          name="intersectionSearch"
          placeholder="e.g Marcus Tullius Cicero, Gaius Sallustius Crispus"
          onChange={e => setText(e.target.value)}
          value={text}
        />
        <Button onClick={() => getResults(text)} disabled={text.length === 0}>
          Search
        </Button>
      </div>
      <Results results={results} type="intersection" clear={clear} />
    </Search>
  );
}
