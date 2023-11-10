import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const gql_client: ApolloClient<NormalizedCacheObject> = new ApolloClient(
  {
    ssrMode: true,
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  }
)

export default gql_client;
