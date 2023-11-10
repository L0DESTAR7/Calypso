import React from "react";
import Image from "next/image";
import { k2d } from "../../app/fonts";
import Link from "next/link";

type NavBarInfo = {
  date: Date,
}

export default function NavBar({ date }: NavBarInfo) {
  const dayOfMonth = date.getDate();
  const month = date.getMonth(); // 0 Indexed, needs to be incremented for regular use
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
          <svg className="w-9 h-9 fill-bunker-700 hover:fill-bunker-900" viewBox="0 0 15 15">
            <path d="M7.5.25a7.25 7.25 0 0 0-2.292 14.13c.363.066.495-.158.495-.35 0-.172-.006-.628-.01-1.233-2.016.438-2.442-.972-2.442-.972-.33-.838-.805-1.06-.805-1.06-.658-.45.05-.441.05-.441.728.051 1.11.747 1.11.747.647 1.108 1.697.788 2.11.602.066-.468.254-.788.46-.969-1.61-.183-3.302-.805-3.302-3.583 0-.792.283-1.438.747-1.945-.075-.184-.324-.92.07-1.92 0 0 .61-.194 1.994.744A6.963 6.963 0 0 1 7.5 3.756 6.97 6.97 0 0 1 9.315 4c1.384-.938 1.992-.743 1.992-.743.396.998.147 1.735.072 1.919.465.507.745 1.153.745 1.945 0 2.785-1.695 3.398-3.31 3.577.26.224.492.667.492 1.343 0 .97-.009 1.751-.009 1.989 0 .194.131.42.499.349A7.25 7.25 0 0 0 7.499.25Z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
