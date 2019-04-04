import { useState } from 'react';
import axios from 'axios';

export default function useSearch(text) {
  const [results, setResults] = useState(null);

  function search(text, select) {
    if (Array.isArray(text)) text = text.join();
    let url;
    if (select) {
      url = `${
        process.env.REACT_APP_LATIN_DIACHRONIC_API_URL
      }/${select}/${text}`;
    } else {
      url = `${
        process.env.REACT_APP_LATIN_DIACHRONIC_API_URL
      }/intersection/${text}`;
    }
    return axios
      .get(url)
      .then(results => {
        console.log(results.data);
        return setResults(results.data);
      })
      .catch(() => {
        return setResults(null);
      });
  }

  function clear() {
    setResults(null);
  }

  return [results, search, clear];
}
