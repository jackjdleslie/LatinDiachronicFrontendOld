import { useState, useEffect } from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';

const GET_AUTHORS = gql`
  {
    authors {
      name
    }
  }
`;

export default function useAuthors() {
  const [authors, setAuthors] = useState(null);
  const [authorsCount, setAuthorsCount] = useState(0);
  const [{ data, error }] = useQuery({ query: GET_AUTHORS });

  useEffect(() => {
    if (error) console.log(error);
    if (data) {
      setAuthors(data.authors);
      setAuthorsCount(data.authors.length);
    }
  }, [data, error]);

  return [authors, authorsCount];
}
