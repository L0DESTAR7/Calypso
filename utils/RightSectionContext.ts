import { createContext } from "react";
import { INITIAL_RIGHT_SECTION_SETTINGS, RightSectionSettings } from "./RightSectionSettings";


const RightSectionContext = createContext<RightSectionSettings>(INITIAL_RIGHT_SECTION_SETTINGS);

export default RightSectionContext;
