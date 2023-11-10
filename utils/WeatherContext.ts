import { createContext } from "react";
import { WeatherSettings, INITIAL_WEATHER_SETTINGS } from "./WeatherSettings";

const WeatherContext = createContext<WeatherSettings>(INITIAL_WEATHER_SETTINGS);

export default WeatherContext;
