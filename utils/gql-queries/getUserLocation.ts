import { gql } from '@apollo/client';

export const GET_USER_LOCATION = gql`
  query GetUserLocation {
    getUserLocation {
      country
      city
      lat
      lon
    }
  }
`;
