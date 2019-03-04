import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LATIN_DIACHRONIC_API_URL}/stats`)
      .then(results => {
        setCount(results.data.entities);
      })
      .catch(() => {
        setCount(0);
      });
  }, []);

  return count;
}
