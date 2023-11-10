import React from "react";
import Clock from "./Clock";
import LocationPrompt from "./LocationPrompt";

export default function LeftSection() {

  return (
    <div className="w-[30%] h-screen bg-bunker-100 z-[1] relative">
      <div className="flex flex-col place-items-center items-center gap-9">
        <div className="sticky top-0 pt-6 text-bunker-900 font-bold text-5xl">Good Morning</div>
        <Clock />
        <div className="mt-2"><LocationPrompt /></div>
      </div>
    </div>
  )
}
