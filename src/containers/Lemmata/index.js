import React, { useState, useContext } from 'react';

import {
  Subtitle,
  Select,
  TextInput,
  Button,
  Checkbox,
} from '../../components';

import styles from './lemmata.module.css';

import { AppContext } from '../../context';

export default function Lemmata({ history, ...props }) {
  const [text, setText] = useState('');
  const [select, setSelect] = useState('lemma');
  const { lemmataCount, search } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  function find(checked) {
    if (checked) {
      if (select === 'lemma') setSelect('find');
      else if (select === 'form') setSelect('match');
    } else {
      if (select === 'find') setSelect('lemma');
      else if (select === 'match') setSelect('form');
    }
  }

  return (
    <>
      <Subtitle
        text={`Search for occurences of lemmata in ${lemmataCount} records`}
      />
      <div className={styles.searchForm}>
        <Select
          name="searchOptions"
          onChange={e => {
            setSelect(e.target.value);
          }}
        >
          <option value="lemma">Lemma</option>
          <option value="form">Form</option>
        </Select>
        <TextInput
          name="lemmaSearch"
          placeholder={
            select === 'lemma' || select === 'find'
              ? 'e.g interdum'
              : 'e.g interdumque'
          }
          onChange={e => setText(e.target.value)}
          value={text}
          checked={select === 'find' || select === 'match'}
        />
        <Button
          onClick={() => {
            setLoading(true);
            search(text, select)
              .then(() => {
                history.push(`/results/${select}`);
              })
              .catch(() => setLoading(false));
          }}
          disabled={text.length === 0}
        >
          {loading ? '...' : 'Search'}
        </Button>
      </div>
      <div className={styles.searchForm}>
        <Checkbox
          id="find"
          name="find"
          onChange={e => {
            find(e.target.checked);
          }}
          label="Display occurences"
        />
      </div>
    </>
  );
}
