import Constants from 'expo-constants';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native'

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import theme from '../theme';
import SigninForm from './SignIn';
import RepositoryPageasdas from './RepositoryPage';
import ReviewForm from './Review';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('pressed..')}><AppBar /></Pressable>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/repository/:id" element={<RepositoryPageasdas />} exact />
        <Route path="/signin" element={<SigninForm />} exact />
        <Route path="/review" element={<ReviewForm />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;