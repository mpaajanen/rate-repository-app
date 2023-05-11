import { View, StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

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
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" path="/" />
      <AppBarTab text="Sign-in" path="/Signin" />
    </View>
  )
};

export default AppBar;