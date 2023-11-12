import 'dotenv/config';
import { RESTDataSource } from '@apollo/datasource-rest';

export default class WeatherAPI extends RESTDataSource {
  override baseURL = 'https://api.weatherapi.com/v1/';

  async getWeatherLocation(lat: Number, lon: Number) {
    console.log("Fetching Weather on: " + lat + "," + lon);
    return this.get(this.baseURL
      + 'current.json?key='
      + process.env.WEATHER_KEY
      + '&q=' + lat + ',' + lon
      + '&aqi=no');
  }

  async getWeatherForecast(lat: Number, lon: Number, days: Number) {
    console.log(`Fetching Weather on: ${lat},${lon} [${days} DAYS FORECAST]`);
    return this.get(this.baseURL
      + 'forecast.json?key='
      + process.env.WEATHER_KEY
      + '&q=' + lat + ',' + lon
      + '&days=' + days
      + '&aqi=no' + '&alerts=no');
  }

  // http://api.weatherapi.com/v1/search.json?key=b5d129e3e50f42b8a4992908232210&q=raba
  async getSuggestions(prompt: String) {
    console.log(`Fetching Autocomplete suggestions for: [${prompt.toUpperCase()}]`);
    return this.get(this.baseURL
      + 'search.json?key='
      + process.env.WEATHER_KEY
      + '&q='
      + prompt.trim().toLowerCase()
    );
  }
}
