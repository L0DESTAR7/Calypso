/* Add extra parameters here for future use.
* Make sure to add a default value in INITIAL_WEATHER_SETTINGS.
*/

export type WeatherSettings = {
  useMetric: boolean
}

export const INITIAL_WEATHER_SETTINGS: WeatherSettings = {
  useMetric: true
};

