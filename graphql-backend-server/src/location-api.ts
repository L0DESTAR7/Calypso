import { RESTDataSource } from '@apollo/datasource-rest';
import { GeoLocationInfo } from './__generated__/resolvers-types';


export default class LocationAPI extends RESTDataSource {
  override baseURL = 'http://ip-api.com/json';

  async getUserLocation(): Promise<GeoLocationInfo> {
    console.log("Fetching Location...");
    return this.get('');
  }
}
