import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import dynamic from 'next/dynamic'

function MyApp({ Component, pageProps }: AppProps) {
  const NoSsr = dynamic(() => import('../components/containments/NoSsr'))

  return (
    <NoSsr>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </NoSsr>
  )
}

export default MyApp
