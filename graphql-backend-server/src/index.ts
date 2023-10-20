import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import LocationAPI from './location-api';
import { GeoLocationInfo } from './GeoLocationInfo';

// Schema
const typeDefs = `#graphql
  
  type GeoLocationInfo {
    country: String
    countryCode: String
    regionName: String
    city: String
    lat: Float
    lon: Float
  }

  type Query {
    getUserLocation: GeoLocationInfo
  }
  
`;

// Context 
interface ContextValue {
  dataSources: {
    locationAPI: LocationAPI;
  }
}

// Resolvers
const resolvers = {
  Query: {
    getUserLocation: async (_: any, __: any, { dataSources }): Promise<GeoLocationInfo> => {
      return dataSources.locationAPI.getUserLocation();
    },
  }
}

// Server setup
const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        locationAPI: new LocationAPI({ cache }),
      },
    }
  }
});


console.log(`🚀  Server ready at: ${url}`);
