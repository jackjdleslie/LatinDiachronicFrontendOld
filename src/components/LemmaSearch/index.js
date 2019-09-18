import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import styles from './lemmaSearch.module.css';
import { Author } from '../../components';
import { useSet } from '../../hooks';

const LemmaSearch = () => {
  const [value, setValue] = useState('');

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
  authors: PropTypes.arrayOf(PropTypes.object),
};

LemmaSearch.defaultProps = {
  authors: [],
};

export default LemmaSearch;
