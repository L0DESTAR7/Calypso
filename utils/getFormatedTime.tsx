import dateProvider from "./timeProvider";


export default function getFormatedTime(timezoneId?: string, stateful?: boolean, hour12?: boolean) {

  stateful = stateful ?? false;
  hour12 = hour12 ?? false;

  if (typeof timezoneId === "undefined") {
    return new Intl.DateTimeFormat('en-US',
      {
        hour12: hour12,
        hour: 'numeric',
        minute: 'numeric'
      }
    ).format(stateful ? dateProvider() : Date.now());
  }

  return new Intl.DateTimeFormat('en-US',
    {
      timeZone: timezoneId,
      hour12: hour12,
      hour: 'numeric',
      minute: 'numeric'
    }
  ).format(stateful ? dateProvider() : Date.now());
}
