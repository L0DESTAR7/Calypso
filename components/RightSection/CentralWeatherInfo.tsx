import { QueryResult, useQuery } from '@apollo/client';
import Image from 'next/image';
import React from 'react';
import { GET_LOCATION_WEATHER } from '../../utils/gql-queries/getLocationWeather';

type CentralWeatherInfoProps = {
  user_location_query: QueryResult
}

export default function CentralWeatherInfo(props: CentralWeatherInfoProps) {

  const { loading: loading_coords, error: error_coords, data: data_coords }
    = props.user_location_query;
  if (loading_coords || error_coords) {
    return CentralWeatherInfoSkeleton();
  }

  if (data_coords) {
    const { loading: loading_weather, error: error_weather, data: data_weather }
      = useQuery(
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

    if (loading_weather || error_weather) {
      return CentralWeatherInfoSkeleton();
    }

    if (data_weather) {
      return (
        <div className='flex flex-row'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row'>
              <h1 className='text-[272px] font-bold text-bunker-800 leading-none place-self-center'>
                {data_weather?.getWeatherInfo.current.temp_c}
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
      );
    }
  }

}



function CentralWeatherInfoSkeleton() {

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col gap-9'>
        <div className='flex flex-row gap-10'>
          <div className='w-72 h-64 bg-bunker-200 rounded-3xl animate-pulse'></div>
          <div className='flex flex-col gap-2'>
            <div className='w-24 h-24 bg-bunker-200 rounded-xl animate-pulse'></div>
            <div className='grid grid-cols-1 gap-y-7 ml-32 place-self-center place-items-center'>
              <div className='w-40 h-14 bg-bunker-200 rounded-lg animate-pulse'></div>
              <div className='w-40 h-14 bg-bunker-200 rounded-lg animate-pulse'></div>
            </div>
          </div>
        </div>
        <div className='w-[40rem] h-16 rounded-2xl bg-bunker-200 animate-pulse place-self-center'>
        </div>
      </div>
    </div>
  );
}
