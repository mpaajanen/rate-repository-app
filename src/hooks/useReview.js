import { useMutation } from "@apollo/client";
import { REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [mutate, result] = useMutation(REVIEW);

  const review = async ({ repositoryUsername, repositoryName, rating, reviewText }) => {
    return await mutate({ 
      variables: { 
        repositoryUsername, 
        repositoryName, 
        rating, 
        reviewText 
      } 
    });
  };
  // const review = async ({ repositoryUsername, repositoryName, rating, reviewText }) => {
  //   const reviewDetails = { repositoryUsername, repositoryName, rating, reviewText }

  //   const payload = await mutate({ variables: { reviewDetails } });

  //   return payload
  // };

  return [review, result];
};

export default useReview;