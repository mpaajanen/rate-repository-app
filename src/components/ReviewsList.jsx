import { FlatList, View, StyleSheet } from 'react-native';
import useMyReviews from '../hooks/useMyReviews';
import format from 'date-fns/format';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 20,
  },
  rowdirection: {
    flexDirection: 'row'
  },
  mainInfo: {
    width: '100%',
    paddingLeft: 10,
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
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.rowdirection}>
        <View style={styles.rating}>
          <Text rating>{item.rating}</Text>
        </View>
        <View style={styles.mainInfo}>
          <Text fontWeight="bold">{item.repository.fullName}</Text>
          <Text>{format(new Date(item.createdAt), 'PP')}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
    </View>
  )
};

export const ReviewsListContainer = ({ reviews }) => {
  const reviewNodes = reviews
  ? reviews.edges.map((edge) => edge.node)
  : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
};

const ReviewsList = () => {
  const includeReviews = true
  const { reviews, loading } = useMyReviews(includeReviews);
  if (loading) return null
  return <ReviewsListContainer reviews={reviews} />
};

export default ReviewsList;