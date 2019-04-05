import React, { useState, useContext } from 'react';
import Autosuggest from 'react-autosuggest';

import { useSet } from '../../hooks';
import { Subtitle, Button, Author } from '../../components';

import styles from './intersection.module.css';

import { AppContext } from '../../context';

export default function Intersection({ history, ...props }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [chosen, chosenAdd, chosenDelete] = useSet();
  const { authors, authorsCount, search } = useContext(AppContext);

  function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : authors
          .filter(author => author.toLowerCase().includes(inputValue))
          .slice(0, 10);
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
      <Subtitle
        text={`Detect intersection of lemmata between a subset of ${authorsCount} authors`}
      />
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
          onClick={() => {
            setLoading(true);
            search([...chosen])
              .then(() => {
                history.push(`/results/intersection`);
              })
              .catch(() => setLoading(false));
          }}
          disabled={chosen.size < 2}
        >
          {loading ? '...' : 'Search'}
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
    </>
  );
}
