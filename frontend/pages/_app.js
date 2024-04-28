import '@/styles/globals.css';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';

import { WagmiConfig } from 'wagmi';
import { goerli, polygonZkEvmTestnet } from 'viem/chains';
import Layout from '@/components/Layout/Layout';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '52529d898a82b4d4dd778c744177c58e';

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [goerli, polygonZkEvmTestnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });
export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  );
}
