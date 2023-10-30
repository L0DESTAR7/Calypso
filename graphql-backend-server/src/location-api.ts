import { RESTDataSource } from '@apollo/datasource-rest';
import { GeoLocationInfo } from './__generated__/resolvers-types';


export default class LocationAPI extends RESTDataSource {
  override baseURL = 'http://ip-api.com/json';
  public count: number = 0;

  async getUserLocation(): Promise<GeoLocationInfo> {
    console.log("Fetching Location..." + this.count++);
    return this.get('');
  }
}
