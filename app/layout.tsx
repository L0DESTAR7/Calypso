import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import RightSection from '../components/RightSection/RightSection';
import { jura } from './fonts';
import LeftSection from '../components/LeftSection/LeftSection';
import WeatherContext from '../utils/WeatherContext';
import Appv1 from '../components/Appv1';


export const metadata: Metadata = {
  icons: {
    icon: "/Calypso.ico",
  },
  title: 'Calypso',
  description: 'Calypso Weather App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jura.className} bg-bunker-50 overflow-clip`}>
        {children}
      </body>
    </html>
  );
}
