import { Dispatch, SetStateAction, createContext } from "react";
import { INITIAL_RIGHT_SECTION_SETTINGS, RightSectionSettings } from "./RightSectionSettings";


const RightSectionContext = createContext<{ RightSectionSettings: RightSectionSettings, setter: Function | Dispatch<SetStateAction<RightSectionSettings>> }>({ RightSectionSettings: INITIAL_RIGHT_SECTION_SETTINGS, setter: () => { } });

export default RightSectionContext;
