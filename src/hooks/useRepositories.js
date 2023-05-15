import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection
    }
  });

  const repositories = data?.repositories;

  // const fetchRepositories = async () => {
  //   setLoading(true);

  //   const response = await fetch('http://192.168.1.100:5000/api/repositories');
  //   const json = await response.json();

  //   setLoading(false);
  //   setRepositories(json);
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  // return { repositories, loading, refetch: fetchRepositories };
  return { repositories, loading };
};

export default useRepositories;