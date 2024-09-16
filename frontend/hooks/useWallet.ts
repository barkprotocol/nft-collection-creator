import { useContext, useEffect, useState } from 'react';
import { WalletContext } from '@solana/wallet-adapter-react';

export function useWallet() {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }

  const { wallet, connect, connecting, connected, disconnect } = context;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (wallet && !connected && !connecting) {
      connect().catch(err => setError(err.message || 'Connection failed'));
    }
  }, [wallet, connect, connected, connecting]);

  return {
    wallet,
    connect,
    connecting,
    connected,
    disconnect,
    error
  };
}
