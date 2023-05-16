import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMyReviews = (includeReviews) => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables: {
      includeReviews
    }
  });

  const reviews = data?.me.reviews;

  return { reviews, loading };
};

export default useMyReviews;