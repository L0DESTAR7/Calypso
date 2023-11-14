import { useContext } from "react";
import RightSectionContext from "../../utils/RightSectionContext";


export default function SuggestionHint() {
  const rightSectionSettings = useContext(RightSectionContext);

  return (
    <div className="absolute ml-[31px] text-bunker-800/40 font-extrabold text-lg w-72 truncate overflow-hidden">
      {`${rightSectionSettings.hoveredCity} ${rightSectionSettings.hoveredRegion} ${rightSectionSettings.hoveredRegion ? ',' : ''} ${rightSectionSettings.hoveredCountry}`}
    </div>
  )
}
