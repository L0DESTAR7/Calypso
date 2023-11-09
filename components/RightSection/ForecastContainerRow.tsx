import { QueryResult, UseSuspenseQueryResult, useQuery, useSuspenseQuery } from "@apollo/client";
import ForecastContainer from "../ForecastContainer";
import { GET_FORECAST_ROW } from "../../utils/gql-queries/getForecastRow";
import { Suspense } from "react";
import getDayDescription from "../../utils/getDayDescription";
import ForecastContainerSkeleton from "../Loading/ForecastContainerSkeleton";


type ForecastContainerRowProps = {
  user_location_query: UseSuspenseQueryResult
}

export default function ForecastContainerRow(props: ForecastContainerRowProps) {

  const { error: error_coords, data: data_coords }
    = props.user_location_query;
  if (data_coords) {
    const { error: error_forecast, data: data_forecast }
      = useSuspenseQuery(
        GET_FORECAST_ROW,
        {
          variables: {
            forecastInput: {
              days: 3,
              lat: data_coords.getUserLocation.lat,
              lon: data_coords.getUserLocation.lon
            }
          }
        }
      );

    if (error_forecast) {
      console.log("ERROR FORECAST ");
    }
    return (
      <div className='grid grid-cols-3 gap-36 place-items-center mr-auto ml-auto'>
        {
          data_forecast?.getForecastInfo.forecast.forecastday.map((item, index) => (
            <Suspense fallback={<ForecastContainerSkeleton />}>
              <ForecastContainer key={index}
                day={
                  getDayDescription(item.date)
                }
                temp={
                  Math.trunc(item.day.avgtemp_c)
                }
                state={
                  String(
                    item.day.condition.text).split(' ').slice(0, 2).join(' ')
                }
              />
            </Suspense >
          ))
        }
      </div >
    )
  }
}
