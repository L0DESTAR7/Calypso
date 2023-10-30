import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import LocationAPI from './location-api.js';
import WeatherAPI from './weather-api.js';
import { readFileSync } from 'fs';
import path from 'path';
import { ForecastWeatherInfo, GeoLocationInfo, Resolvers, WeatherInfo } from './__generated__/resolvers-types.js';

// Schema
const typeDefs = readFileSync(path.resolve(path.resolve(), './src/schema.graphql'), { encoding: 'utf-8' });

// Context 
export interface ContextValue {
  dataSources: {
    locationAPI: LocationAPI;
    weatherAPI: WeatherAPI;
  }
}

// Resolvers
const resolvers: Resolvers = {
  Query: {
    getUserLocation: async (_: any, __: any, { dataSources }): Promise<GeoLocationInfo> => {
      return dataSources.locationAPI.getUserLocation();
    },
    getWeatherInfo: async (_: any, { coordinates }: any, { dataSources }): Promise<WeatherInfo> => {
      const { lat, lon } = coordinates;
      return dataSources.weatherAPI.getWeatherLocation(lat, lon);
    },
    getForecastInfo: async (_: any, { forecastInput }: any, { dataSources }): Promise<ForecastWeatherInfo> => {
      const { lat, lon, days } = forecastInput;
      return dataSources.weatherAPI.getWeatherForecast(lat, lon, days);
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
        weatherAPI: new WeatherAPI({ cache }),
      },
    }
  }
});


console.log(`🚀  Server ready at: ${url}`);
