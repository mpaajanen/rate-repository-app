import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import TextInput from './TextInput';
import Text from './Text';
import { useDebounce } from 'use-debounce'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  searchContainer: {
    marginVertical: 10,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center'
  },
  search: {
    marginHorizontal: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const Search = ({ filter }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.search} onChangeText={filter} placeholder='search...'></TextInput>
    </View>
  )
}

export const RepositoryListContainer = ({ repositories, filter }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={<Search filter={filter}/>}
    />
  );
};

const RepositoryList = ({ sorting }) => {
  const [searchString, setSearchString] = useState();
  const [debouncedSearchString] = useDebounce(searchString, 500);

  const filterRepositories = searchKeyword => setSearchString(searchKeyword)

  const { repositories } = useRepositories({...sorting, debouncedSearchString});

  return <RepositoryListContainer repositories={repositories} filter={filterRepositories}/>
};

export default RepositoryList;