import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { FlatList, StyleSheet, View } from 'react-native'
import Text from "./Text";
import theme from "../theme";
import format from "date-fns/format";

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
    width: '100%',
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
  },
  rating: {
    width: 80,
    height: 80,
    border: 'solid',
    borderRadius: 40,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} />
  // Repository's information implemented in the previous exercise
};

const ReviewItem = ({ review }) => {
  console.log(review)
  return (
    <View style={styles.card}>
      <View style={styles.rowdirection}>
        <View style={styles.rating}>
          <Text rating>{review.rating}</Text>
        </View>
        <View style={styles.mainInfo}>
          <Text fontWeight="bold">{review.user.username}</Text>
          <Text>{format(new Date(review.createdAt), 'PP')}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  )
  // Single review item
};

const RepositoryPage = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(GET_REPOSITORY_BY_ID, {
    fetchPolicy: "cache-and-network",
    variables: {
      id
    }
  })
  
  if (loading) {
    return null
  }

  console.log(data)
  const repository = data?.repository
  // const reviews = data?.repository.reviews.edges

  const reviews = data.repository.reviews
  ? data.repository.reviews.edges.map((edge) => edge.node)
  : [];


  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      // ...
    />
  );
};

export default RepositoryPage;