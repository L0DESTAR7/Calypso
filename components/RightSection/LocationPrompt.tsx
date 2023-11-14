import { ApolloQueryResult, useQuery } from "@apollo/client";
import { useContext, useState } from "react";
import RightSectionContext from "../../utils/RightSectionContext";
import { GET_LOCATION_SUGGESTIONS } from "../../utils/gql-queries/getLocationSuggestions";
import { LocationSuggestion } from "../../graphql-backend-server/src/__generated__/resolvers-types";
import SuggestionList from "./SuggestionList";
import SuggestionHint from "./SuggestionHint";

export default function LocationPrompt() {

  const rightSectionSettings = useContext(RightSectionContext);
  console.log("RE RENDERING LOCATION PROMPT, CURRENT CONTEXT: " + JSON.stringify(rightSectionSettings));
  const [locationPrompt, setLocationPrompt] = useState<string>();
  const suggestionQuery: ApolloQueryResult<{ getSuggestions: LocationSuggestion[] } | undefined> =
    useQuery(
      GET_LOCATION_SUGGESTIONS,
      {
        variables: {
          prompt: locationPrompt
        }
      }
    );
  let timeoutRef: NodeJS.Timeout;

  const delaySearch = (query: string) => {
    console.log("Delay search activated by QUERY = " + query);
    clearTimeout(timeoutRef);
    console.log("Cleared timeoutID = " + timeoutRef + " for QUERY = " + query);
    timeoutRef = setTimeout(() => {
      console.log("Setting Final prompt to: " + query);
      setLocationPrompt(query);
    }, 500);
  }

  // Display suggestion data in a suggestion section
  // Upon selection amongst suggestions, update the context 
  // The following code is a place holder
  if (suggestionQuery.data) {
    console.log(suggestionQuery.data);
    if (suggestionQuery.data.getSuggestions.length > 0) {
      rightSectionSettings.selectedCountry = suggestionQuery.data.getSuggestions[0].country!;
      rightSectionSettings.selectedCity = suggestionQuery.data.getSuggestions[0].name!;
    }
  }

  return (
    <div>
      <div className="w-96 h-10 z-[14] border-bunker-300/60 bg-bunker-100 border-[3px] rounded-full relative">
        <div className="flex flex-row w-full h-full px-4 place-items-start items-center gap-3">
          <svg width="20" height="27" fill="none" viewBox="0 0 17 21">
            <path stroke="#344D56" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke="#344D56" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8.5c0 7.142-7.5 11.25-7.5 11.25S1 15.642 1 8.5a7.5 7.5 0 0 1 15 0Z" />
          </svg>
          <input className="text-bunker-800 z-[15] font-extrabold text-lg bg-transparent w-72 outline-none" maxLength={90} onChange={e => delaySearch(e.target.value)} />
          <SuggestionHint />
        </div>
      </div>
      <SuggestionList query={suggestionQuery} />
    </div>
  );
}

