import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';
import { REVIEW_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query GetRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`

export const GET_REPOSITORY_BY_ID = gql`
  ${REPOSITORY_FIELDS}
  query GetRepositoriesById($id: ID!) {
    repository(id: $id) {
      ...RepositoryFields
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
      url
    }    
  }
`

// export const GET_REPOSITORY_REVIEWS = gql`
//   ${REVIEW_FIELDS}
//   query GetRepositoryReviews($id: ID!) {
//     repository(id: $id) {
//       id
//       fullName
//       ...ReviewFields
//     }
//   }
// `