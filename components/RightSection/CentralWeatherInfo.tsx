import { UseSuspenseQueryResult, useSuspenseQuery } from '@apollo/client';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { GET_LOCATION_WEATHER } from '../../utils/gql-queries/getLocationWeather';
import CentralWeatherInfoSkeleton from '../Loading/CentralWeatherInfoSkeleton';

type CentralWeatherInfoProps = {
  user_location_query: UseSuspenseQueryResult
}

export default function CentralWeatherInfo(props: CentralWeatherInfoProps) {

  const { error: error_coords, data: data_coords }
    = props.user_location_query;
  if (data_coords) {
    const { error: error_weather, data: data_weather }
      = useSuspenseQuery(
        GET_LOCATION_WEATHER,
        {
          variables: {
            coordinates: {
              lat: data_coords.getUserLocation.lat,
              lon: data_coords.getUserLocation.lon
            }
          }
        }
      );

    if (error_weather) {
      // TODO: implement error skeleton
      return CentralWeatherInfoSkeleton();
    }

    return (
      <Suspense fallback={<CentralWeatherInfoSkeleton />}>
        <div className='flex flex-row'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row items-stretch'>
              <h1 className='text-[272px] font-bold text-bunker-800 leading-none place-self-center' suppressHydrationWarning={true}>
                {Math.trunc(data_weather?.getWeatherInfo.current.temp_c)}
              </h1>
              <Image className='place-self-start'
                src="Degree.svg"
                width={99}
                height={99}
                alt="Degree"
              />
              <div className='grid grid-cols-2 gap-x-3 gap-y-7 place-self-center place-items-center ml-8'>
                <Image
                  src="Wind.svg"
                  alt=""
                  width={51}
                  height={23}
                />
                <div className='font-semibold text-3xl text-bunker-400'>{data_weather?.getWeatherInfo.current.wind_kph} kph</div>
                <Image
                  src="Humidity.svg"
                  alt=""
                  width={20}
                  height={32}
                />
                <div className='font-semibold text-3xl text-bunker-400 place-self-start'>{data_weather?.getWeatherInfo.current.humidity} %</div>
              </div>
            </div>
            <div className='text-8xl font-bold text-bunker-800 place-self-center'>
              {data_weather?.getWeatherInfo.current.condition.text}
            </div>
          </div>
        </div>
      </Suspense>
    );
  }
}


