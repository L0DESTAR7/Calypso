import { gql } from '@apollo/client';

export const GET_TIMEZONE_ID = gql(/* GraphQL */`
query ExampleQuery($coordinates: Coordinates) {
  getWeatherInfo(coordinates: $coordinates) {
    location {
      tz_id
    }
  }
}
`);
