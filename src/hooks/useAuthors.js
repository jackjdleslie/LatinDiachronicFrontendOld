import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuthors() {
  const [authors, setAuthors] = useState(null);
  const [authorsCount, setAuthorsCount] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LATIN_DIACHRONIC_API_URL}/authors`)
      .then(results => {
        setAuthors(results.data);
        setAuthorsCount(results.data.length);
      })
      .catch(() => {
        setAuthors(null);
        setAuthorsCount(0);
      });
  }, []);

  return [authors, authorsCount];
}
