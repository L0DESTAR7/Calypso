import { Coordinates } from '../../graphql-backend-server/src/__generated__/resolvers-types';
import { gql } from '@apollo/client';



export const GET_LOCATION_WEATHER = gql(/* GraphQL */ `
query GetLocationWeather($coordinates: Coordinates) {
  getWeatherInfo(coordinates: $coordinates) {
    current {
      temp_c
      temp_f
      humidity
      gust_kph
      gust_mph
      wind_kph
      wind_mph
      wind_dir
      condition {
        code
        text
      }
      feelslike_c
      feelslike_f
    }
  }
}
`);
