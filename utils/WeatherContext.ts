import { Dispatch, SetStateAction, createContext } from "react";
import { WeatherSettings, INITIAL_WEATHER_SETTINGS } from "./WeatherSettings";

const WeatherContext = createContext<{ WeatherSettings: WeatherSettings, setter: Function | Dispatch<SetStateAction<WeatherSettings>> }>({ WeatherSettings: INITIAL_WEATHER_SETTINGS, setter: () => { } });

export default WeatherContext;
