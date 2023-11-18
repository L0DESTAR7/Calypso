import ForecastContainerSkeleton from "../Loading/ForecastContainerSkeleton";
import { useQuery } from "@apollo/client";
import { GET_HOURLY_FORECAST } from "../../utils/gql-queries/getHourlyForecast";
import { useContext } from "react";
import RightSectionContext from "../../utils/RightSectionContext";
import ForecastContainer from "../ForecastContainer";
import { ForecastWeatherInfo } from "../../graphql-backend-server/src/__generated__/resolvers-types";
import { GET_TIMEZONE_ID } from "../../utils/gql-queries/getTimezoneId";
import getFormatedTime from "../../utils/getFormatedTime";



export default function HourlyForecastGrid() {

  const rightSectionSettings = useContext(RightSectionContext);
  const timeZoneQuery = useQuery<{ getWeatherInfo: { location: { tz_id: string } } }>(
    GET_TIMEZONE_ID,
    {
      variables: {
        coordinates: {
          lat: rightSectionSettings.RightSectionSettings.selectedLat,
          lon: rightSectionSettings.RightSectionSettings.selectedLon
        }
      }
    }
  )

  const { error: error_forecast, loading: loading_forecast, data: data_forecast }
    = useQuery<{ getForecastInfo: ForecastWeatherInfo }>(
      GET_HOURLY_FORECAST,
      {
        variables: {
          forecastInput: {
            days: 1,
            lat: rightSectionSettings.RightSectionSettings.selectedLat,
            lon: rightSectionSettings.RightSectionSettings.selectedLon
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

    const [currentHour, currentMinute] = getFormatedTime(timeZoneQuery.data?.getWeatherInfo.location.tz_id, false).split(":");
    const formatedHour = currentHour.padStart(2, "0");
    const formatedMinute = currentMinute.padStart(2, "0");
    const currentTime = `${formatedHour}:${formatedMinute}`;
    const filteredHourlyForecast = data_forecast
      .getForecastInfo.forecast?.forecastday![0]!.hour?.filter((_, index) => index % 2 !== 0)
      .filter((item, index) => item!.time!.split(" ")[1] > currentTime.split(" ")[0])
      .slice(0, 6);

    return (
      <>
        <div className='grid grid-cols-auto grid-flow-col gap-x-12 gap-y-6 place-items-center mr-auto ml-auto self-center'>
          {
            filteredHourlyForecast!.map((item, index) => {
              if (index < 3) {
                const hours = item!.time!.split(" ")[1];
                return (
                  <div key={index}>
                    <ForecastContainer
                      day={hours}
                      temp={Math.trunc(item!.temp_c!)}
                      condition={item!.condition?.text!}
                    />
                  </div>
                );
              }
            }
            )
          }
        </div>
        <div className='grid grid-cols-auto grid-flow-col gap-x-12 gap-y-6 place-items-center mr-auto ml-auto self-center'>
          {
            filteredHourlyForecast!.map((item, index) => {
              if (index >= 3) {
                const hours = item!.time!.split(" ")[1];
                return (
                  <div key={index}>
                    <ForecastContainer
                      day={hours}
                      temp={Math.trunc(item!.temp_c!)}
                      condition={item!.condition?.text!}
                    />
                  </div>
                );
              }
            }
            )
          }
        </div>
      </>
    );
  }
}
