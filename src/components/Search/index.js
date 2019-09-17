import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import './react-autosuggest.css';
import styles from './search.module.css';
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
  return <span>{section.title}</span>;
}

function getSectionSuggestions(section) {
  return section.data;
}

const Search = ({ authors }) => {
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
    placeholder: 'e.g interdum, interdumque, Publius Papinius Statius...',
    value,
    onChange,
  };

  return (
    <div className={styles.searchContainer}>
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

Search.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object),
};

Search.defaultProps = {
  authors: [],
};

export default Search;
