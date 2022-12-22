'use client';

import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { getDefaultProvider } from 'ethers';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [publicProvider()],
  )

const client = createClient({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
        new WalletConnectConnector({
          chains,
          options: {
            qrcode: true,
          },
        }),
      ],
    provider,
    webSocketProvider,
});

const WagmiProvider = ({ children }: { children: React.ReactNode }) => {
    return <WagmiConfig client={client}>{children}</WagmiConfig>
};

export default WagmiProvider;