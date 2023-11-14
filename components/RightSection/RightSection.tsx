'use client'
import React, { useState } from "react";
import Clock from "./Clock";
import LocationPrompt from "./LocationPrompt";
import SmallWeatherBody from "./SmallWeatherBody";
import { ApolloProvider } from "@apollo/client";
import gql_client from "../../utils/gql-client";
import RightSectionContext from "../../utils/RightSectionContext";
import { INITIAL_RIGHT_SECTION_SETTINGS, RightSectionSettings } from "../../utils/RightSectionSettings";
import SuggestionHint from "./SuggestionHint";

export default function RightSection() {

  const [rightSectionSettings, setRightSectionSettings] = useState<RightSectionSettings>(INITIAL_RIGHT_SECTION_SETTINGS);
  const value = { rightSectionSettings, setRightSectionSettings };

  return (
    <ApolloProvider client={gql_client}>
      <RightSectionContext.Provider value={{ RightSectionSettings: rightSectionSettings, setter: setRightSectionSettings }}>
        <div className="w-[30%] h-screen bg-bunker-100 z-[10] relative">
          <div className="flex flex-col place-items-center items-center gap-9">
            <div className="sticky top-0 pt-2 text-bunker-900 font-bold text-5xl">Good Morning</div>
            <Clock />
            <div className="mt-2 relative z-[12]">
              <LocationPrompt />
            </div>
            <div className="sticky z-[11] mt-2"><SmallWeatherBody /></div>
          </div>
        </div>
      </RightSectionContext.Provider>
    </ApolloProvider>
  )
}
