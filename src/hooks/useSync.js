import { useState, useEffect } from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';

const GET_API_VERSION = gql`
  {
    apiVersion
  }
`;

export default function useSync() {
  const [isSynced, setIsSynced] = useState(false);
  const [{ data, error }] = useQuery({ query: GET_API_VERSION });

  useEffect(() => {
    if (error) console.log(error);
    if (data) setIsSynced(true);
  }, [data, error]);

  return isSynced;
}
