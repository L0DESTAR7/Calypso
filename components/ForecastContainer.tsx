import React from 'react';
import { jura } from '../app/fonts';


export default function ForecastContainer({ day, temp, state }) {


  return (
    <div className='grid grid-cols-1 content-center w-28 h-48 border-solid rounded-3xl border-4 border-bunker-300/[.66]'>
      <div className={`flex flex-col space-y-6 place-items-center text-center ${jura.className} font-bold`}>
        <div className='text-xl text-bunker-950'>{day}</div>
        <div className='text-3xl text-bunker-950'>{`${temp}°`}</div>
        <div className='text-xl text-bunker-300'>{state}</div>
      </div>
    </div >
  );
}
