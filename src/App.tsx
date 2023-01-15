import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'

import { Account, MintNFT } from './components'

import styles from './index.module.css';

export function App() {
  const { isConnected } = useAccount()
  return (
    <div className={styles.multibg}>
    <>
      <div className={styles.c}>
      <h1>Welcome to PrimeTime</h1>
    </div>
    <div className={styles.c}>
    <p className={styles.txt}> PrimeTime is the first fully on chain NFT on Avalanche.
        This means all data and code needed 
        to render the NFTs are fully on the C chain. This is in contrast to most other NFTs that store their data on
        IPFS, Arweave, or even centralized infrastructure. In other words, you will be able to access your 
        NFTs even if IPFS stops existing. 
        </p>
        </div>
        <div className={styles.c}>
      <p className={styles.txt}> PrimeTime NFTs derive their rarity from their mint time and the prime numbers. Primes 
        are numbers that are evenly divisible only by themselves and 1. The first few primes are 2, 3, 5, 7, 11.
        On the blockchain, the mint time is represented as seconds since January 1st 1970, also known as a UNIX timestamp.
        While there are infinite prime numbers, they get progressively more rare. Currently, the average gap between 
        two consecutive prime timestamps is a little larger than 20. In addition to the timestamp, the contract also computes whether the 
        year, month, day, hour, minute and second of the mint time are prime numbers. The first NFT that has all its 
        properties prime will not be minted until the year 2027.
        </p>
    </div>
    <div className={styles.c}>
      <p className={styles.txt}> The exact apperance of your NFT depends on mint time, see the marketplaces below to get an idea. 
      </p>
    </div>

    <div className={styles.c}>
      <ConnectKitButton />
    </div>
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
    </>
    </div>
  )
}
