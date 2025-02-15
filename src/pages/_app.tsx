import '../app/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, Theme, lightTheme} from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';

import { config } from '../wagmi';

const client = new QueryClient();

const myCustomTheme: Theme = merge(lightTheme(), {
  colors: {
    accentColor: 'linear-gradient(to top right, rgb(56, 189, 248), rgb(168, 85, 247), rgb(236, 72, 153))',
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
