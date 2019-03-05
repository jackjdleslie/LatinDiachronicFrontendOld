import { useState } from 'react';
import axios from 'axios';

export default function useLemma() {
  const [lemmata, setLemmata] = useState(null);

  function getLemmata(text, select, find) {
    if (find) {
      if (select === 'lemma') select = 'find';
      else select = 'match';
    }
    axios
      .get(
        `${process.env.REACT_APP_LATIN_DIACHRONIC_API_URL}/${select}/${text}`
      )
      .then(results => {
        console.log(results);
        setLemmata(results.data);
      })
      .catch(() => {
        setLemmata(null);
      });
  }

  function clearLemmata() {
    setLemmata(null);
  }

  return [lemmata, getLemmata, clearLemmata];
}
