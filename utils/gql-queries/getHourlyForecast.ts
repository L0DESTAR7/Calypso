import { gql } from '@apollo/client';

export const GET_HOURLY_FORECAST = gql(/* GraphQL */ `
query ExampleQuery($forecastInput: ForecastInput) {
  getForecastInfo(forecastInput: $forecastInput) {
    forecast {
      forecastday {
        date
        hour {
          condition {
            text
            code
          }
          temp_c
          temp_f
          time
        }
      }
    }
  }
}
`);
