import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "@components/ui/NavBar/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <NavBar/>
    </div>
  )
}

export default MyApp
