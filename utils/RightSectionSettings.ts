

export type RightSectionSettings = {
  selectedCountry: String
  selectedLat: Number
  selectedLon: Number
  selectedCity: String
  selectedRegion: String
  hoveredCountry: String
  hoveredCity: String
  hoveredRegion: String
}

export const INITIAL_RIGHT_SECTION_SETTINGS: RightSectionSettings = {
  selectedCountry: "Germany",
  selectedLat: 50.12,
  selectedLon: 8.68,
  selectedCity: "Frankfurt Am Main",
  selectedRegion: "Hessen",
  hoveredCountry: "",
  hoveredCity: "",
  hoveredRegion: "",
}
