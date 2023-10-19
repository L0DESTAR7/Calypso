import Image from 'next/image';
import React from 'react';

export default function CentralWeatherInfo() {
  return (
    <div className='flex flex-row'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[272px] font-bold text-bunker-800 leading-none'>
          20
        </h1>
        <div className='text-8xl font-bold text-bunker-800'>
          Cloudy
        </div>
      </div>
      <Image className='place-self-start'
        src="Degree.svg"
        width={99}
        height={99}
        alt=""
      />
      <div className='grid grid-cols-2 gap-x-3 gap-y-7 place-self-center place-items-center'>
        <Image
          src="Wind.svg"
          alt=""
          width={71}
          height={43}
        />
        <div className='font-semibold text-3xl text-bunker-400'>6.1 mph</div>
        <Image
          src="Humidity.svg"
          alt=""
          width={20}
          height={32}
        />
        <div className='font-semibold text-3xl text-bunker-400 place-self-start'>90 %</div>
      </div>
    </div>
  )
}
