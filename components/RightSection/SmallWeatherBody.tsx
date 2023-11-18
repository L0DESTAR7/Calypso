import Image from "next/image";
import { useContext } from "react";
import RightSectionContext from "../../utils/RightSectionContext";
import { useQuery } from "@apollo/client";
import { WeatherInfo } from "../../graphql-backend-server/src/__generated__/resolvers-types";
import { GET_LOCATION_WEATHER } from "../../utils/gql-queries/getLocationWeather";


export default function SmallWeatherBody() {

  const rightSectionContext = useContext(RightSectionContext);
  const { error: error_weather, loading: loading_weather, data: data_weather } =
    useQuery<{ getWeatherInfo: WeatherInfo }>(
      GET_LOCATION_WEATHER,
      {
        variables: {
          coordinates: {
            lat: rightSectionContext.RightSectionSettings.selectedLat,
            lon: rightSectionContext.RightSectionSettings.selectedLon,
          }
        }
      }
    )

  if (data_weather) {
    return (
      <div className='flex flex-row w-full h-full'>
        <div className='flex flex-col w-full h-full gap-4 items-center'>
          <div className='flex flex-row items-stretch'>
            <h1 className='text-7xl font-semibold text-bunker-800 leading-none place-self-center' suppressHydrationWarning={true}>
              {Math.trunc(data_weather?.getWeatherInfo.current?.temp_c!)}
            </h1>
            <Image className='place-self-start'
              src="Degree.svg"
              width={29}
              height={29}
              alt="Degree"
            />
            <div className='grid grid-cols-2 gap-y-2 place-self-center place-items-center ml-3'>
              <Image
                src="Wind.svg"
                alt=""
                width={31}
                height={18}
              />
              <div className='font-semibold text-xl  text-bunker-400' suppressHydrationWarning={true}>
                {`${data_weather?.getWeatherInfo.current?.wind_kph} kph`}
              </div>
              <Image
                src="Humidity.svg"
                alt=""
                width={13}
                height={21}
              />
              <div className='font-semibold text-xl text-bunker-400 place-self-start' suppressHydrationWarning={true}>
                {`${data_weather?.getWeatherInfo.current?.humidity} kph`}
              </div>
            </div>
          </div>
          <div className='text-2xl font-bold text-bunker-400 place-self-center'>
            {`Feels like ${Math.trunc(data_weather?.getWeatherInfo.current?.feelslike_c!)}°`}
          </div>
          <div className="text-4xl text-bunker-400 font-extrabold">
            {data_weather?.getWeatherInfo.current?.condition?.text}
          </div>
        </div>
      </div>

    );
  }
}
