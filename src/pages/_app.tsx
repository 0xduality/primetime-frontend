import { ConnectKitProvider } from 'connectkit'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'

import { client } from '../wagmi'
import { MintNFT } from '../components/Mint'

import styles from './index.module.css';

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <div className={styles.multibg}>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <NextHead>
          <title>Welcome to PrimeTime</title>
        </NextHead>
        {mounted && <Component {...pageProps} />}
      </ConnectKitProvider>
      <div><p></p></div>
      <MintNFT/>
      <div className={styles.c}>
      <p className={styles.txt}> Verified 
      contracts: <a href="https://snowtrace.io/address/0xa0825be23abb4c817fe83e6202718ee227c772b8">PrimeTime</a> <a href="https://snowtrace.io/address/0xf9fb465fbe44d27c3d651aa25d57b6d980aeacee">Renderer</a> 
      </p>
    </div>
    <div className={styles.c}>
      <p className={styles.txt}> Marketplaces: <a href="https://opensea.io/collection/primetime-avax">OpenSea</a> <a href="https://joepegs.com/collections/0xa0825be23abb4c817fe83e6202718ee227c772b8">Joepegs</a> <a href="https://campfire.exchange/collections/0xa0825be23abb4c817fe83e6202718ee227c772b8">Campfire</a> 
      </p>
    </div>
    </WagmiConfig>
    </div>
  )
}

export default App