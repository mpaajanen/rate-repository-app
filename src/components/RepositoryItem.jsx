import React from 'react';
import { Image, View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import { useNavigate } from 'react-router-native';
import theme from '../theme';
import * as Linking from 'expo-linking'

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 20,
  },
  rowdirection: {
    flexDirection: 'row'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  mainInfo: {
    paddingLeft: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  stats: {
    justifyContent: 'center',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    color: '#ffffff',
    backgroundColor: theme.colors.primary
  }
})

const countFormatter = count => {
  if (count < 1000) return count
  const formatedCount = `${(count / 1000).toFixed(1)}` + 'k'
  return formatedCount
}

const RepositoryItem = ({item}) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
      <View testID="repositoryItem" style={styles.card}>
        <View style={styles.rowdirection}>
          <View>
            <Image style={styles.avatar} source={{uri: item.ownerAvatarUrl}} />
          </View>
          <View style={styles.mainInfo}>
            <Text fontWeight="bold">{item.fullName}</Text>
            <Text>{item.description}</Text>
            <View style={{alignSelf: 'flex-start', borderRadius: 5, overflow: 'hidden', background: 'transparent'}}><Text tag>{item.language}</Text></View>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View>
            <Text style={{textAlign: 'center'}} fontWeight={"bold"}>{countFormatter(item.stargazersCount)}</Text>
            <Text style={{textAlign: 'center'}}>Stars</Text>
          </View>
          <View>
            <Text style={{textAlign: 'center'}} fontWeight={"bold"}>{countFormatter(item.forksCount)}</Text>
            <Text style={{textAlign: 'center'}}>Forks</Text>
          </View>
          <View>
            <Text style={{textAlign: 'center'}} fontWeight={"bold"}>{item.reviewCount}</Text>
            <Text style={{textAlign: 'center'}}>Reviews</Text>
          </View>
          <View>
            <Text style={{textAlign: 'center'}} fontWeight={"bold"}>{item.ratingAverage}</Text>
            <Text style={{textAlign: 'center'}}>Rating</Text>
          </View>
        </View>
        {item.url ? (
          <Pressable style={styles.button} onPress={() => {Linking.openURL(item.url)}}>
            <Text tag>Open in GitHub</Text>
          </Pressable>) 
          : null
        }
      </View>
    </Pressable>
  );
};

export default RepositoryItem;