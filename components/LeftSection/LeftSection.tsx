'use client'
import React from 'react';
import NavBar from './NavBar';
import dateProvider from '../../utils/timeProvider';
import { ApolloProvider } from '@apollo/client';
import gql_client from '../../utils/gql-client';
import CentralBody from './CentralBody';


export default function RightSection() {

  return (
    <ApolloProvider client={gql_client}>
      <div className='w-[70%] h-screen'>
        <NavBar date={dateProvider()}></NavBar>
        <CentralBody></CentralBody>
      </div>
    </ApolloProvider>
  )
}
