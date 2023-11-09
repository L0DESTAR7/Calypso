import { gql } from '@apollo/client';

export const GET_FORECAST_ROW = gql(/* GraphQL */`
query ExampleQuery($forecastInput: ForecastInput) {
  getForecastInfo(forecastInput: $forecastInput) {
    location {
      country
      region
      name
    }
    forecast {
      forecastday {
        date
        day {
          avgtemp_c
          avgtemp_f
          condition {
            text
            code
          }
        }
      }
    }
  }
}
`
)
