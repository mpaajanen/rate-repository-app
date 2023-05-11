import { View, StyleSheet, ScrollView } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    backgroundColor: theme.colors.tabBackground,
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'flex-end'
  },
  tab: {
    marginVertical: 5,
    marginHorizontal: 10
  },
  title: {
    color: '#fffff',
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab style={styles.tab} text="Repositories" path="/" />
        <AppBarTab style={styles.tab} text="Sign-in" path="/signin" />
      </ScrollView>
    </View>
  )
};

export default AppBar;