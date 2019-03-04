import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useSync() {
  const [isSynced, setIsSynced] = useState(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LATIN_DIACHRONIC_API_URL)
      .then(() => {
        setIsSynced(true);
      })
      .catch(() => {
        setIsSynced(false);
      });
  }, [isSynced]);

  return isSynced;
}
