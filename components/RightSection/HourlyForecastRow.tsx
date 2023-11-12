import { useContext } from "react";
import ForecastContainerSkeleton from "../Loading/ForecastContainerSkeleton";
import WeatherContext from "../../utils/WeatherContext";
import { useQuery } from "@apollo/client";
import { GET_HOURLY_FORECAST } from "../../utils/gql-queries/getHourlyForecast";



export default function HourlyForecastRow() {

  const weatherContext = useContext(WeatherContext);

  const { error: error_forecast, loading: loading_forecast, data: data_forecast }
    = useQuery(
      GET_HOURLY_FORECAST,
      {
        variables: {
          forecastInput: {
            days: 1,
            lat: 33.9246,
            lon: -6.9014
          }
        }
      }
    );

  if (error_forecast || loading_forecast) {
    return (
      <div>
        <div className='grid grid-cols-3 gap-12 place-items-center mr-auto ml-auto'>
          <ForecastContainerSkeleton />
          <ForecastContainerSkeleton />
          <ForecastContainerSkeleton />
        </div>
      </div>
    );
  }

  if (data_forecast) {
    return (
      <div>{data_forecast.getForecastInfo.forecast.forecastday[0].hour[0].temp_c}</div>
    )
  }
}
