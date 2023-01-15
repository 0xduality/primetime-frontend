import { getDefaultClient } from 'connectkit'
import { configureChains, createClient } from 'wagmi'
import { avalanche } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains([avalanche], [publicProvider()],)

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: 'PrimeTime',
    chains: chains,
    provider: provider,
  })
)
