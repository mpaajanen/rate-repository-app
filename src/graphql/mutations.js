import { gql } from '@apollo/client';

export const SIGNIN = gql`
  mutation signin($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const REVIEW = gql`
  mutation review($repositoryUsername: String!, $repositoryName: String!, $rating: Int!, $reviewText: String) {
    createReview (
      review: {
        ownerName: $repositoryUsername
        repositoryName: $repositoryName
        rating: $rating
        text: $reviewText
      }
    ) {
      repositoryId
    }
  }
`

export const SIGNUP = gql`
  mutation signup($username: String!, $password: String!) {
    createUser (
      user: {
        username: $username
        password: $password
      }
    ) {
      id
      username
    }
  }
`