import { useState } from 'react';
import axios from 'axios';

export default function useLemma(lemma) {
  const [lemmata, setLemmata] = useState(null);

  function getLemmata(lemma) {
    axios
      .get(`${process.env.REACT_APP_LATIN_DIACHRONIC_API_URL}/lemma/${lemma}`)
      .then(results => {
        console.log(results);
        setLemmata(results.data);
      })
      .catch(() => {
        setLemmata(null);
      });
  }

  return [lemmata, getLemmata];
}
