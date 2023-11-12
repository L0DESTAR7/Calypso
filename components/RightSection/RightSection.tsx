'use client'
import React from "react";
import Clock from "./Clock";
import LocationPrompt from "./LocationPrompt";
import SmallWeatherBody from "./SmallWeatherBody";
import { ApolloProvider } from "@apollo/client";
import gql_client from "../../utils/gql-client";

export default function RightSection() {

  return (
    <ApolloProvider client={gql_client}>
      <div className="w-[30%] h-screen bg-bunker-100 z-[1] relative">
        <div className="flex flex-col place-items-center items-center gap-9">
          <div className="sticky top-0 pt-2 text-bunker-900 font-bold text-5xl">Good Morning</div>
          <Clock />
          <div className="mt-2"><LocationPrompt /></div>
          <SmallWeatherBody></SmallWeatherBody>
        </div>
      </div>
    </ApolloProvider>
  )
}
