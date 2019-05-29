import { useState, useEffect } from 'react';

export default function useCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, []);

  return count;
}
