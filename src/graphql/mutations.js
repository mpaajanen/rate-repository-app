import { gql } from '@apollo/client';

export const SIGNIN = gql`
  mutation signin($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`