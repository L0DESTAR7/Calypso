import { ApolloQueryResult, useQuery } from "@apollo/client";
import { useContext, useEffect, useRef, useState } from "react";
import RightSectionContext from "../../utils/RightSectionContext";
import { GET_LOCATION_SUGGESTIONS } from "../../utils/gql-queries/getLocationSuggestions";
import { LocationSuggestion } from "../../graphql-backend-server/src/__generated__/resolvers-types";
import SuggestionList from "./SuggestionList";
import SuggestionHint from "./SuggestionHint";
import getLocationDescription from "../../utils/getLocationDescription";

export default function LocationPrompt() {

  const rightSectionContext = useContext(RightSectionContext);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [autocompleteSignal, setAutocompleteSignal] = useState<boolean>(false);
  const hintedText = getLocationDescription(
    {
      city: rightSectionContext.RightSectionSettings.hoveredCity,
      region: rightSectionContext.RightSectionSettings.hoveredRegion,
      country: rightSectionContext.RightSectionSettings.hoveredCountry
    }
  );
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

  useEffect(() => {
    inputRef.current!.value = hintedText;
    // Set suggestionQuery status to loading. This will cause
    // the suggestionList to collapse upon auto-completion.
    suggestionQuery.loading = true;
    setAutocompleteSignal(false);
  }, [autocompleteSignal]);

  const delaySearch = (query: string) => {

    // Clear Hint (by clearing hovered Params)
    if (query.length === 0) {
      rightSectionContext.setter(
        {
          ...rightSectionContext.RightSectionSettings,
          hoveredCity: "",
          hoveredRegion: "",
          hoveredCountry: "",
        }
      );
    }


    clearTimeout(timeoutRef);
    timeoutRef = setTimeout(() => {
      setLocationPrompt(query);
    }, 500);
  }

  return (
    <div>
      <div className="w-96 h-10 z-[14] border-bunker-300/60 bg-bunker-100 border-[3px] rounded-full relative">
        <div className="flex flex-row w-full h-full px-4 place-items-start items-center gap-3">
          <svg width="20" height="27" fill="none" viewBox="0 0 17 21">
            <path stroke="#344D56" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke="#344D56" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8.5c0 7.142-7.5 11.25-7.5 11.25S1 15.642 1 8.5a7.5 7.5 0 0 1 15 0Z" />
          </svg>
          <input ref={inputRef} className="text-bunker-800 z-[15] font-extrabold text-lg capitalize bg-transparent w-72 outline-none"
            maxLength={90} onChange={e => delaySearch(e.target.value)}
            placeholder={getLocationDescription({
              city: rightSectionContext.RightSectionSettings.selectedCity,
              region: rightSectionContext.RightSectionSettings.selectedRegion,
              country: rightSectionContext.RightSectionSettings.selectedCountry,
            })} />
          <SuggestionHint />
          <svg width="20" height="17" fill="none" viewBox="0 0 20 17">
            <path fill="#2F424A" d="M15.3846 6.18182v3.09091c0 .20494-.081.40148-.2253.5464-.1442.14491-.3399.22637-.5439.22637H7.24135l.99519.9987a.77338.77338 0 0 1 .16684.2508.77643.77643 0 0 1 0 .5918.77338.77338 0 0 1-.16684.2508.7685.7685 0 0 1-.2497.1676.76583.76583 0 0 1-.58907 0 .76846.76846 0 0 1-.24969-.1676l-2.3077-2.31817a.77293.77293 0 0 1-.16696-.25079.77562.77562 0 0 1-.05864-.29591.77562.77562 0 0 1 .05864-.29591.77297.77297 0 0 1 .16696-.2508l2.3077-2.31818c.14434-.14499.3401-.22645.54423-.22645.20412 0 .39989.08146.54423.22645.14434.145.22543.34165.22543.54671 0 .20505-.08109.40171-.22543.5467L7.24135 8.5h6.60485V6.18182c0-.20494.081-.40149.2253-.5464a.7673.7673 0 0 1 .5439-.22633.7673.7673 0 0 1 .5439.22633c.1443.14491.2253.34146.2253.5464ZM20 1.54545V15.4545c0 .4099-.1621.803-.4506 1.0928-.2885.2899-.6798.4527-1.0879.4527H1.53846c-.40802 0-.79934-.1628-1.08786-.4527C.1621 16.2575 0 15.8644 0 15.4545V1.54545C0 1.13557.16209.74248.4506.45265.73913.16282 1.13044 0 1.53846 0H18.4615c.4081 0 .7994.16282 1.0879.45265.2885.28983.4506.68292.4506 1.0928ZM18.4615 15.4545V1.54545H1.53846V15.4545H18.4615Z" />
          </svg>
        </div>
      </div>
      <SuggestionList query={suggestionQuery} autocompleteTrigger={setAutocompleteSignal} />
    </div>
  );
}

