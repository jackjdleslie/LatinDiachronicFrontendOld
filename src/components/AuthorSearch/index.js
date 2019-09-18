import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import './react-autosuggest.css';
import styles from './authorSearch.module.css';
import { Author } from '../../components';
import { useSet } from '../../hooks';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(data, value) {
  const escapedValue = escapeRegexCharacters(value.trim()).toLowerCase();

  if (escapedValue === '') {
    return [];
  }

  return data
    .map(section => {
      return {
        title: section.title,
        data: section.data
          .filter(element => element.name.toLowerCase().includes(escapedValue))
          .slice(0, 10),
      };
    })
    .filter(section => section.data.length > 0);
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>
      <span className={styles.plus}>+ </span>
      {suggestion.name}
    </span>
  );
}

function renderSectionTitle(section) {
  return null;
}

function renderInputComponent(inputProps) {
  return (
    <div className="inputContainer">
      <input {...inputProps} />
      <span className="icon">⌄</span>
    </div>
  );
}

function getSectionSuggestions(section) {
  return section.data;
}

const AuthorSearch = ({ authors }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [chosen, chosenAdd, chosenDelete] = useSet();

  let data = [
    {
      title: 'Authors',
      data: authors,
    },
  ];

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(data, value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  function onSuggestionSelected(event, { suggestionValue }) {
    chosenAdd(suggestionValue);
    setValue('');
  }

  const inputProps = {
    placeholder: chosen.size === 0 ? 'all authors' : 'add more',
    value,
    onChange,
  };

  return (
    <div className={styles.searchContainer}>
      <label className={styles.label}>Search by author</label>
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        inputProps={inputProps}
        renderInputComponent={renderInputComponent}
      />
      {chosen.size > 0 && (
        <div className={styles.authors}>
          {[...chosen].map(author => (
            <Author key={author} close={() => chosenDelete(author)}>
              {author}
            </Author>
          ))}
        </div>
      )}
    </div>
  );
};

AuthorSearch.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object),
};

AuthorSearch.defaultProps = {
  authors: [],
};

export default AuthorSearch;
