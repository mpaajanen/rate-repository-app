import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  // const [repositories, setRepositories] = useState();

  // const fetchRepositories = async () => {
  //   const response = await fetch('http://192.168.1.100:5000/api/repositories');
  //   const json = await response.json();

  //   console.log(json)

  //   setRepositories(json)
  // }

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);
  const { repositories } = useRepositories();
  
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id}
      // other props
    />
  );
};

export default RepositoryList;