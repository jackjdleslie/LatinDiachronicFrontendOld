import React, { useState } from 'react';

import useLemma from '../../hooks/useLemma';

import Subtitle from '../../components/Subtitle';
import Select from '../../components/Select';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Block from '../../components/Block';
import Checkbox from '../../components/Checkbox';

import Results from '../Results';

import styles from './lemmata.module.css';

import useCount from '../../hooks/useCount';

export default function Lemmata({ ...props }) {
  const [text, setText] = useState('');
  const [lemmata, getLemmata, clearLemmata] = useLemma();
  const [select, setSelect] = useState('lemma');
  const count = useCount();

  function clear() {
    clearLemmata();
    setText('');
  }

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
      <Block>
        <Subtitle
          text={`Search for occurences of lemmata in ${count} records`}
        />
        <div className={styles.searchForm}>
          <Select
            name="searchOptions"
            onChange={e => {
              setSelect(e.target.value);
              clearLemmata();
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
            onClick={() => getLemmata(text, select)}
            disabled={text.length === 0}
          >
            Search
          </Button>
        </div>
        <div className={styles.searchForm}>
          <Checkbox
            id="find"
            name="find"
            onChange={e => {
              find(e.target.checked);
              clearLemmata();
            }}
            label="Find occurences"
          />
        </div>
      </Block>
      <Results results={lemmata} type={select} clear={clear} />
    </>
  );
}
