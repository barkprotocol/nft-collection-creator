"use client";

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/hooks/useWallet';

const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
];

function WalletConnectButton() {
  const { wallet, connect, connecting, connected, disconnect, error } = useWallet();

  if (error) {
    // Display error more prominently
    return (
      <div className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg">
        <p>Error: {error.message || 'Unknown error occurred'}</p>
      </div>
    );
  }

  if (connected) {
    return (
      <Button variant="outline" onClick={() => disconnect()}>
        Connected
      </Button>
    );
  }

  return (
    <WalletMultiButton className="bg-primary text-primary-foreground hover:bg-primary/90" />
  );
}

export default function LandingPage() {
  return (
    <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Your page content */}
            <WalletConnectButton />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
