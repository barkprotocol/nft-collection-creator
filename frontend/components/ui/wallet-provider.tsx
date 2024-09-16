"use client";

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useWallet } from '@/hooks/useWallet';

const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
];

function WalletConnectButton() {
  const { wallet, connect, connecting, connected, disconnect, error } = useWallet();

  if (error) {
    return <Button variant="destructive">Error: {error}</Button>;
  }

  if (connected) {
    return <Button variant="outline" onClick={() => disconnect()}>Connected</Button>;
  }

  return <WalletMultiButton className="bg-primary text-primary-foreground hover:bg-primary/90" />;
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
