import React from "react";
import Image from "next/image";
import { jura, k2d } from "../../app/fonts";
import Link from "next/link";

type NavBarInfo = {
  date: Date,
}

export default function NavBar({ date }: NavBarInfo) {
  const dayOfMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className="sticky top-0 bg-bunker-50 h-24">
      <div className="flex flex-row items-center h-full justify-between">
        <div className="flex space-x-4 ml-14">
          <Image
            src="/Calypso.svg"
            width={32}
            height={32}
            alt="Calypso Logo"
          />
          <div className={`${k2d.className} text-4xl text-bunker-900`}>Calypso</div>
        </div>
        <div className="text-4xl font-bold text-bunker-900">
          {dayOfMonth} - {month + 1} - {year}
        </div>
        <Link className="mr-8"
          href="https://github.com/">
          <Image
            src="/Github.svg"
            width={32}
            height={32}
            alt="Link to Github Repo"
          />
        </Link>
      </div>
    </div>
  )
}
