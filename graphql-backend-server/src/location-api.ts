import { RESTDataSource } from '@apollo/datasource-rest';
import { GeoLocationInfo } from './GeoLocationInfo';


export default class LocationAPI extends RESTDataSource {
  override baseURL = 'http://ip-api.com/json';

  async getUserLocation(): Promise<GeoLocationInfo> {
    return this.get('');
  }
}
