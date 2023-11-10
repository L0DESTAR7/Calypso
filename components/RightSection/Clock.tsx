'use client'
import dateProvider from "../../utils/timeProvider";

export default function Clock() {
  return (
    <div className="font-semibold text-5xl" suppressHydrationWarning={true}>{`${dateProvider().toLocaleString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' })}`}</div>
  );
}
