'use client'
import { useState } from "react";
import WeatherContext from "../utils/WeatherContext";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import { INITIAL_WEATHER_SETTINGS, WeatherSettings } from "../utils/WeatherSettings";



export default function Appv1() {

  const [weatherSettings, setWeatherSettings] = useState<WeatherSettings>(INITIAL_WEATHER_SETTINGS);

  return (
    <div className='flex flex-row'>
      <WeatherContext.Provider value={{ WeatherSettings: weatherSettings, setter: setWeatherSettings }} >
        <LeftSection></LeftSection>
        <RightSection></RightSection>
      </WeatherContext.Provider>
    </div >
  );
}
