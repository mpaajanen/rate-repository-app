import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query GetRepositories {
    repositories {
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
      url
    }    
  }
`