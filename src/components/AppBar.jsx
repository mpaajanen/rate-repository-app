import { View, StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    backgroundColor: theme.colors.tabBackground
  },
  title: {
    color: '#fffff',
  }
});

const AppBar = () => {
  return <View style={styles.container}><Text color="tabText" fontWeight="bold">Repositories</Text></View>;
};

export default AppBar;