import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { ME } from '../graphql/queries';
import { useQuery, useApolloClient } from '@apollo/client';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useContext } from 'react';

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
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext)
  const { data } = useQuery(ME);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab style={styles.tab} text="Repositories" path="/" />
        {data?.me 
        ? (<Pressable onPress={signOut}><Text style={styles.tab} color="tabText" fontWeight="bold">Sign-out</Text></Pressable>)
        : (<AppBarTab style={styles.tab} text="Sign-in" path="/signin" />)
        }
        
      </ScrollView>
    </View>
  )
};

export default AppBar;