import { configureChains, createClient } from 'wagmi'
import { avalanche } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
 
const { chains, provider } = configureChains([avalanche], [publicProvider()],)
 

export const client = createClient({
  autoConnect: true,
  connectors: [ new InjectedConnector({ chains }), new MetaMaskConnector({ chains })], 
  provider
})
