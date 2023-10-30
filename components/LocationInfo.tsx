'use client'
import { QueryResult } from '@apollo/client';
import React from 'react';

type LocationProps = {
  query: QueryResult
}

export default function LocationInfo(props: LocationProps) {

  const { loading, error, data } = props.query;

  if (loading || error) return (
    <div className='flex flex-row space-x-3 place-items-center'>
      <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-bunker-200 fill-bunker-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <div className='h-6 w-56 bg-bunker-200 rounded-md animate-pulse'></div>
    </div>
  );

  return (
    <div className='flex flex-row space-x-3 place-items-center'>
      <svg className='w-4 h-5 stroke-2 stroke-bunker-400 scale-150 fill-bunker-100/0 mb-1' viewBox="0 0 21 20">
        <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
      </svg>
      <div className='text-[32px] text-bunker-400 font-bold leading-none'>
        {`${data?.getUserLocation.city}, ${data?.getUserLocation.country}`}
      </div>
    </div>
  )
}

