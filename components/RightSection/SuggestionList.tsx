import { ApolloQueryResult } from "@apollo/client"
import { LocationSuggestion } from "../../graphql-backend-server/src/__generated__/resolvers-types"
import SuggestionItem from "./SuggestionItem"

type SuggestionListProps = {
  query: ApolloQueryResult<{ getSuggestions: LocationSuggestion[] } | undefined>
  autocompleteTrigger: Function
}

export default function SuggestionList(props: SuggestionListProps) {

  if (props.query.loading || props.query.error) {
    return <div></div>
  }

  if (props.query.data?.getSuggestions.length == 0) {
    return (
      <div className={`flex flex-col w-full h-14 z-[13] bg-bunker-800/60 border-bunker-300/60 border-[3px] 
       absolute top-5 rounded-b-xl backdrop-blur-[8px] text-bunker-100 text-xl font-light leading-relaxed items-center pt-4`}>
        No Location found...
      </div>
    );
  }

  return (
    <div className={`flex flex-col w-full h-60 z-[13] bg-bunker-800/60 border-bunker-300/60 border-[3px] 
       absolute top-5 rounded-b-2xl backdrop-blur-[8px] pt-4 overflow-y-scroll scrollbar`}>
      {
        props.query.data?.getSuggestions.map((item, index) => (
          <SuggestionItem data={`${item.name} ${item.region}, ${item.country}`} dataObj={item} autocompleteTrigger={props.autocompleteTrigger} />
        ))
      }
      <div className="w-1/4 h-1 bg-bunker-100/50 rounded-full place-self-center my-4 text-transparent">THE END</div>
    </div>
  );
}
