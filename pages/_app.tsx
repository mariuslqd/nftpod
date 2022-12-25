import "@rainbow-me/rainbowkit/styles.css";
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy"
import { mainnet, polygon, optimism } from 'wagmi/chains'
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";


const {chains, provider} = configureChains(
[mainnet, polygon, optimism],
[alchemyProvider ({apiKey: "h56FLaTaKucVc8foZ7MPY13P8RsXVjzs"})]
);

const {connectors} =getDefaultWallets ({
  appName: "RainbowKit Tutorial",
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
 <WagmiConfig client={wagmiClient}>
  <RainbowKitProvider chains={chains}>
      <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>
  );
}
