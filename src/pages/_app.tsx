import '../app/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { config } from '../uttils/walletConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, http } from 'wagmi';
import { RainbowKitProvider, getDefaultConfig, Theme, lightTheme} from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';

const client = new QueryClient();

const myCustomTheme: Theme = merge(lightTheme(), {
  colors: {
    accentColor: 'linear-gradient(to right, rgb(88, 28, 135), rgb(219, 39, 119))',
  }
} as Theme)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider theme={myCustomTheme}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
