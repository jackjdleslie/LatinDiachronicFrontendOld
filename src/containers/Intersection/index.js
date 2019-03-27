import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

import useDetect from '../../hooks/useDetect';
import useSet from '../../hooks/useSet';

import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';
import Block from '../../components/Block';
import Author from '../../components/Author';

import Results from '../Results';

import styles from './intersection.module.css';

export default function Intersection({ ...props }) {
  const [text, setText] = useState('');
  const [results, getResults, clearResults] = useDetect(null);

  const [authors, setAuthors] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [chosen, chosenAdd, chosenDelete, chosenClear] = useSet();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LATIN_DIACHRONIC_API_URL}/authors`)
      .then(results => {
        console.log(results.data);
        setAuthors(results.data);
      })
      .catch(() => {
        setAuthors(null);
      });
  }, []);

  function clear() {
    clearResults();
    setText('');
  }

  function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : authors.filter(
          author => author.toLowerCase().slice(0, inputLength) === inputValue
        );
  }

  function onChange(event, { newValue }) {
    setText(newValue);
  }

  function onSuggestionsFetchRequested({ value }) {
    setSuggestions(getSuggestions(value));
  }

  function onSuggestionsClearRequested() {
    setSuggestions([]);
  }

  function onSuggestionSelected(event, { suggestionValue }) {
    chosenAdd(suggestionValue);
    setText('');
  }

  function renderSuggestion(suggestion) {
    return suggestion;
  }

  function renderInputComponent(inputProps) {
    return <input {...inputProps} />;
  }

  return (
    <>
      <Block>
        <Subtitle text="Detect intersection of lemmata between a set of authors" />
        <div className={styles.searchForm}>
          {authors && (
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              onSuggestionSelected={onSuggestionSelected}
              getSuggestionValue={val => val}
              renderSuggestion={renderSuggestion}
              inputProps={{
                value: text,
                onChange: onChange,
                name: 'intersectionSearch',
                placeholder: 'e.g Publius Papinius Statius',
              }}
              renderInputComponent={renderInputComponent}
            />
          )}
          <Button
            onClick={() => getResults([...chosen])}
            disabled={chosen.size < 2}
          >
            Search
          </Button>
        </div>
        {chosen.size > 0 && (
          <div className={styles.authors}>
            {[...chosen].map(author => (
              <Author key={author} close={() => chosenDelete(author)}>
                {author}
              </Author>
            ))}
          </div>
        )}
      </Block>
      <Results
        results={results}
        type="intersection"
        clear={() => {
          clear();
          chosenClear();
        }}
      />
    </>
  );
}
