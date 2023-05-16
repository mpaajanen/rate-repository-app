import Constants from 'expo-constants';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native'

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import theme from '../theme';
import SigninForm from './SignIn';
import SignupForm from './SignUp';
import RepositoryPage from './RepositoryPage';
import ReviewForm from './Review';
import ReviewsList from './ReviewsList'
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  const [selectedSorting, setSelectedSorting] = useState({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('pressed..')}><AppBar /></Pressable>
      <Picker selectedValue={selectedSorting} onValueChange={(itemValue, itemIndex) => {
        switch (itemValue) {
          case 'latest':
            setSelectedSorting({ orderBy: 'CREATED_AT', orderDirection: 'DESC' })
            break;
          case 'highest':
            setSelectedSorting({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' })
            break;
          case 'lowest':
            setSelectedSorting({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' })
            break;
          default:
            setSelectedSorting({ orderBy: 'CREATED_AT', orderDirection: 'DESC' })
            break;
        }
      }}>
        <Picker.Item label="Select sorting method..." value="select" />
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
      <Routes>
        <Route path="/" element={<RepositoryList sorting={selectedSorting} />} exact />
        <Route path="/repository/:id" element={<RepositoryPage />} exact />
        <Route path="/signin" element={<SigninForm />} exact />
        <Route path="/signup" element={<SignupForm />} exact />
        <Route path="/review" element={<ReviewForm />} exact />
        <Route path="/myreviews" element={<ReviewsList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;