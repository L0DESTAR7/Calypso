import LocationInfo from "../components/LocationInfo";

type LocationInfo = {
  country: string,
  region: string,
  city: string
}

export default function getLocationDescription(locationInfo: LocationInfo): string {

  if (locationInfo.city === "" || locationInfo.country === "") {
    return "";
  }

  let locationDescription: string;
  // Sometimes the region is the city or country. In this case skip the region.
  // Otherwise you might end up with for example: "Mexico Mexico, Mexico".
  //                                              CITY    REGION, COUNTRY
  // Mucha repetición !
  //
  // Or even "Berlin Berlin, Germany"
  //         CITY    REGION, COUNTRY
  // Viel Redundanz !
  if (locationInfo.city === locationInfo.region || locationInfo.country === locationInfo.region) {
    locationDescription = `${locationInfo.city}, ${locationInfo.country}`;
    return locationDescription;
  }

  locationDescription = `${locationInfo.city} ${locationInfo.region}, ${locationInfo.country}`;
  return (locationDescription);
}
