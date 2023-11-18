import { ApolloQueryResult, useQuery, } from "@apollo/client";
import ForecastContainer from "../ForecastContainer";
import { GET_FORECAST_ROW } from "../../utils/gql-queries/getForecastRow";
import { Suspense, useContext } from "react";
import getDayDescription from "../../utils/getDayDescription";
import ForecastContainerSkeleton from "../Loading/ForecastContainerSkeleton";
import WeatherContext from "../../utils/WeatherContext";
import { GeoLocationInfo } from "../../graphql-backend-server/src/__generated__/resolvers-types";
import ForecastContainerRowSkeleton from "../Loading/ForecastContainerRowSkeleton";


type ForecastContainerRowProps = {
  user_location_query: ApolloQueryResult<{
    getUserLocation: GeoLocationInfo
  }>
}

export default function ForecastContainerRow(props: ForecastContainerRowProps) {

  const weatherContext = useContext(WeatherContext);

  const { error: error_coords, loading: loading_coords, data: data_coords }
    = props.user_location_query;

  if (error_coords || loading_coords) {
    return (
      <ForecastContainerRowSkeleton />
    );
  }

  if (data_coords) {
    const { error: error_forecast, loading: loading_forecast, data: data_forecast }
      = useQuery(
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

    if (error_forecast || loading_forecast) {
      return (
        <ForecastContainerRowSkeleton />
      );
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
                  Math.trunc(item.day[weatherContext.WeatherSettings.useMetric ? "avgtemp_c" : "avgtemp_f"])
                }
                condition={
                  item.day.condition.text
                }
              />
            </Suspense >
          ))
        }
      </div >
    );
  }
}
