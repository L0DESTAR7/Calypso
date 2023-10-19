'use client'
import React from 'react';
import NavBar from './NavBar';
import dateProvider from '../../utils/timeProvider';
import CentralWeatherInfo from './CentralWeatherInfo';
import ForecastContainer from '../ForecastContainer';

export default function RightSection() {
  return (
    <div className='w-[70%] h-screen'>
      <NavBar date={dateProvider()}></NavBar>
      <div className='flex flex-col place-items-center mt-48 space-y-20'>
        <CentralWeatherInfo />
        <div className='flex flex-row space-x-52'>
          <ForecastContainer></ForecastContainer>
          <ForecastContainer></ForecastContainer>
          <ForecastContainer></ForecastContainer>
          <ForecastContainer></ForecastContainer>
        </div>
      </div>
    </div>
  )
}
