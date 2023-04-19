import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Anek_Bangla } from '@next/font/google'

const font_const = Anek_Bangla({
  subsets: ['latin'],
  weight: ['400']
})
// Special Elite
// League Spartan
// Gleegoo

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className={font_const.className}>
      <Component {...pageProps} />
    </div>
  )
}

