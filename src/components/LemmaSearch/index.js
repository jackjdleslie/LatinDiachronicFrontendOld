import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import styles from './lemmaSearch.module.css';
import { Author } from '../../components';
import { useSet } from '../../hooks';

const LemmaSearch = ({ onUpdate }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    onUpdate(value);
  }, [value]);

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <div className={styles.searchContainer}>
      <label className={styles.label}>Search by lemma</label>
      <input
        onChange={onChange}
        value={value}
        className={styles.input}
        placeholder="e.g interdum, interdumque"
      />
    </div>
  );
};

LemmaSearch.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default LemmaSearch;
