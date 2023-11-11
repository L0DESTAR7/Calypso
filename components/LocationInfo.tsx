import { ApolloQueryResult } from '@apollo/client';
import React, { Suspense } from 'react';
import LocationInfoSkeleton from './Loading/LocationInfoSkeleton';
import { GeoLocationInfo } from '../graphql-backend-server/src/__generated__/resolvers-types';

type LocationProps = {
  query: ApolloQueryResult<{
    getUserLocation: GeoLocationInfo
  }>
}

export default function LocationInfo(props: LocationProps) {

  const { error, data, loading } = props.query;

  if (error || loading) return (
    // TODO: Implement error skeleton
    LocationInfoSkeleton()
  );

  return (
    <Suspense fallback={<LocationInfoSkeleton />}>
      <div className='flex flex-row space-x-3 place-items-center'>
        <svg className='w-4 h-5 stroke-2 stroke-bunker-400 scale-150 fill-bunker-100/0 mb-1' viewBox="0 0 21 20">
          <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
        </svg>
        <div className='text-[32px] text-bunker-400 font-bold leading-none'>
          {`${data.getUserLocation.city}, ${data.getUserLocation.country}`}
        </div>
      </div>
    </Suspense>
  )
}

