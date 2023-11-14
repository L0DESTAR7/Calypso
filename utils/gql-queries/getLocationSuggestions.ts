import { gql } from '@apollo/client';

export const GET_LOCATION_SUGGESTIONS = gql(/* GraphQL */ `
query ExampleQuery($prompt: String) {
  getSuggestions(prompt: $prompt) {
    country
    lat
    lon
    name
    region
  }
}
`);
