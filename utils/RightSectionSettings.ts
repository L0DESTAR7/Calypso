

export type RightSectionSettings = {
  selectedCountry: string
  selectedLat: Number
  selectedLon: Number
  selectedCity: string
  selectedRegion: string
  hoveredCountry: string
  hoveredCity: string
  hoveredRegion: string
  hoveredLat: Number
  hoveredLon: Number
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
  hoveredLat: 0,
  hoveredLon: 0,
}
