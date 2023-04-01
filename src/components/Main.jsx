import Constants from 'expo-constants';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('pressed..')}><AppBar /></Pressable>
      <RepositoryList />
    </View>
  );
};

export default Main;