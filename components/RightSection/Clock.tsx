import { useContext } from "react";
import RightSectionContext from "../../utils/RightSectionContext";
import { useQuery } from "@apollo/client";
import { GET_TIMEZONE_ID } from "../../utils/gql-queries/getTimezoneId";
import getFormatedTime from "../../utils/getFormatedTime";


export default function Clock() {

  const rightSectionSettings = useContext(RightSectionContext);
  const timeZoneQuery = useQuery<{ getWeatherInfo: { location: { tz_id: string } } }>(
    GET_TIMEZONE_ID,
    {
      variables: {
        coordinates: {
          lat: rightSectionSettings.RightSectionSettings.selectedLat,
          lon: rightSectionSettings.RightSectionSettings.selectedLon
        }
      }
    }
  )

  if (timeZoneQuery.error || timeZoneQuery.loading) {

    const formattedTime = getFormatedTime(undefined, true, true);

    return (
      <div className="font-semibold text-bunker-950 text-5xl" suppressHydrationWarning={true}>
        {
          formattedTime
        }
      </div>
    );
  }

  if (timeZoneQuery.data) {

    const formattedTime = getFormatedTime(timeZoneQuery.data.getWeatherInfo.location.tz_id, true, true);

    return (
      <div className="font-semibold text-bunker-950 text-5xl" suppressHydrationWarning={true}>
        {
          formattedTime
        }
      </div>
    );
  }
}
