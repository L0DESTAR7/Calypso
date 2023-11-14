import { useContext } from "react";
import RightSectionContext from "../../utils/RightSectionContext";
import getLocationDescription from "../../utils/getLocationDescription";


export default function SuggestionHint() {
  const rightSectionContext = useContext(RightSectionContext);

  console.log("SUGGESTION HINT BEING RERENDERED: " + JSON.stringify(rightSectionContext.RightSectionSettings));
  return (
    <div className="absolute ml-[31px] text-bunker-800/40 font-extrabold text-lg w-72 truncate overflow-hidden">
      {getLocationDescription({
        city: rightSectionContext.RightSectionSettings.hoveredCity,
        region: rightSectionContext.RightSectionSettings.hoveredRegion,
        country: rightSectionContext.RightSectionSettings.hoveredCountry,
      })}
    </div>
  )
}
