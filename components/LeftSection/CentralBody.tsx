import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { GET_USER_LOCATION } from "../../utils/gql-queries/getUserLocation";
import CentralWeatherInfo from "./CentralWeatherInfo";
import LocationInfo from "../LocationInfo";
import ForecastContainerRow from "./ForecastContainerRow";
import Settings from "./Settings";
import WeatherContext from "../../utils/WeatherContext";
import { INITIAL_WEATHER_SETTINGS, WeatherSettings } from "../../utils/WeatherSettings";

export default function CentralBody() {

  const query = useQuery(GET_USER_LOCATION);
  const [weatherSettings, setWeatherSettings] = useState<WeatherSettings>(INITIAL_WEATHER_SETTINGS);

  return (
    <WeatherContext.Provider value={weatherSettings}>
      <div className='flex flex-col place-items-center mt-14 space-y-20 items-center'>
        <div className='place-self-start ml-14'>
          <LocationInfo query={query}></LocationInfo>
        </div>
        <CentralWeatherInfo user_location_query={query} />
        <div className="w-full flex flex-row">
          <ForecastContainerRow user_location_query={query} />
          <Settings />
        </div>
      </div>
    </WeatherContext.Provider>
  )
}
