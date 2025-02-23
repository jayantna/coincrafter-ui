import { sepolia } from 'wagmi/chains';
import {http} from 'wagmi';
import {getDefaultConfig} from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'Coincrafter',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    {
      ...sepolia,
      iconBackground: '#000',
      iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040',
    },],
  transports: {
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/NqzP0krKyxJSpumLLOoPqH-aBf39nyGm'),
  },
});