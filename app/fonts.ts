import { Jura, K2D } from 'next/font/google'


export const k2d = K2D({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-k2d'
})

export const jura = Jura({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jura'
})
