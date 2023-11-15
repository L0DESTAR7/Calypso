import React from 'react';
import { jura } from '../app/fonts';
import getWeatherDescription from '../utils/getWeatherDescription';

type ForecastContainerProps = {
  day: string
  temp: number
  condition: string
}

export default function ForecastContainer(props: ForecastContainerProps) {


  return (
    <div className='grid grid-cols-1 content-center w-28 h-48 border-solid rounded-3xl border-4 border-bunker-300/[.66] relative'>
      <div className={`flex flex-col space-y-6 place-items-center text-center ${jura.className} font-bold capitalize`}>
        <div className='text-xl tex-bunker-950 place-self-center absolute top-2' suppressHydrationWarning={true}>{props.day}</div>
        <div className='text-3xl text-bunker-950' suppressHydrationWarning={true}>{`${props.temp}°`}</div>
        <div className='text-xl text-bunker-300' suppressHydrationWarning={true}>{getWeatherDescription(props.condition)}</div>
      </div>
    </div >
  );
}
