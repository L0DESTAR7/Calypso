import { KeyboardEvent, MouseEvent, useContext, useState } from "react"
import RightSectionContext from "../../utils/RightSectionContext"
import { LocationSuggestion } from "../../graphql-backend-server/src/__generated__/resolvers-types";

type SuggestionItemProps = {
  data: string
  dataObj?: LocationSuggestion
  autocompleteTrigger: Function
}

export default function SuggestionItem(props: SuggestionItemProps) {

  const rightSectionContext = useContext(RightSectionContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const triggerOnHover = () => {
    setIsHovered(true);

    // Update context only when either hover or focus is on
    if (!isFocused) {
      rightSectionContext.setter({
        ...rightSectionContext.RightSectionSettings,
        hoveredCountry: props.dataObj?.country!,
        hoveredCity: props.dataObj?.name!,
        hoveredRegion: props.dataObj?.region!
      });
    }
  }

  const killOnHover = () => {
    setIsFocused(false);
  }

  const triggerOnFocus = () => {
    setIsFocused(true);
    if (!isHovered) {
      rightSectionContext.setter({
        ...rightSectionContext.RightSectionSettings,
        hoveredCountry: props.dataObj?.country!,
        hoveredCity: props.dataObj?.name!,
        hoveredRegion: props.dataObj?.region!
      });
    }
  }

  const killOnFocus = () => {
    setIsFocused(false);
  }

  const handleKeyPressed = (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
    // Update context when Enter key or Left Click is pressed and the element is hovered or focused
    if (e.type === "click" && (isFocused || isHovered)) {
      rightSectionContext.setter(
        {
          ...rightSectionContext.RightSectionSettings,
          selectedLat: props.dataObj?.lat!,
          selectedLon: props.dataObj?.lon!,
          selectedCity: props.dataObj?.name!,
          selectedRegion: props.dataObj?.name!,
          selectedCountry: props.dataObj?.country!,
        }
      )
      props.autocompleteTrigger(true);
    }

    if ((e as KeyboardEvent).key === "Enter" && (isFocused || isHovered)) {
      rightSectionContext.setter(
        {
          ...rightSectionContext.RightSectionSettings,
          selectedLat: props.dataObj?.lat!,
          selectedLon: props.dataObj?.lon!,
          selectedCity: props.dataObj?.name!,
          selectedRegion: props.dataObj?.name!,
          selectedCountry: props.dataObj?.country!,
        }
      )
      props.autocompleteTrigger(true);
    }
  }

  return (
    <div className="flex flex-col w-full h-11 px-3 my-2 gap-1">
      <div tabIndex={0} onFocus={triggerOnFocus} onBlur={killOnFocus} onMouseOver={triggerOnHover} onMouseLeave={killOnHover} onClick={e => handleKeyPressed(e)} onKeyDown={e => handleKeyPressed(e)}
        className="flex flex-row h-full hover:bg-bunker-900 focus:bg-bunker-900 focus:bord rounded-lg place-items-center gap-2 px-1">
        <svg width="17" height="20" fill="none" viewBox="0 0 10 12">
          <path stroke="#DEEEEF" strokeLinecap="round" strokeLinejoin="round" d="M6.6 5a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0Z" />
          <path stroke="#DEEEEF" strokeLinecap="round" strokeLinejoin="round" d="M9 5c0 3.81-4 6-4 6S1 8.81 1 5a4 4 0 0 1 8 0Z" />
        </svg>
        <p className="w-[364px] h-8 text-xl text-bunker-100 font-light leading-relaxed antialiased truncate overflow-hidden">
          {props.data}
        </p>
      </div>
      <div className="w-full h-[1px] bg-bunker-300/50 place-self-center"></div>
    </div>
  )
}
