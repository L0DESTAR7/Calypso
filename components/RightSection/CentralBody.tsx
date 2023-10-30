import React from "react";
import { useQuery } from '@apollo/client';
import { GET_USER_LOCATION } from "../../utils/gql-queries/getUserLocation";
import CentralWeatherInfo from "./CentralWeatherInfo";
import LocationInfo from "../LocationInfo";
import ForecastContainer from "../ForecastContainer";

export default function CentralBody() {

  const query = useQuery(GET_USER_LOCATION);

  return (
    <div className='flex flex-col place-items-center mt-14 space-y-20'>
      <div className='place-self-start ml-14'>
        <LocationInfo query={query}></LocationInfo>
      </div>
      <CentralWeatherInfo user_location_query={query} />
      <div className='flex flex-row space-x-52'>
        <ForecastContainer></ForecastContainer>
      </div>
    </div>
  )
}
