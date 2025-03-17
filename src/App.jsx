import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Course from './Components/Courses/Course'
import Footer from './Components/Footer/Footer'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, arbitrum, base, scroll, polygon } from '@reown/appkit/networks'

import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'



// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = '0828d852938a0d912e446a3c270ea8e5'

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://polite-ocean-0fe91d80f.6.azurestaticapps.net/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
}

// 3. Set the networks
const networks = [mainnet, arbitrum, base, scroll, polygon]

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export function ConnectButton() {
  return <appkit-button />
}



const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Course />
        <Footer />
    </div>
  )
}

export default App