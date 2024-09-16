import { useContext, useEffect, useState } from 'react';
import { WalletContext } from '@solana/wallet-adapter-react';

interface UseWalletReturn {
  wallet: any; // Replace `any` with the actual type if known
  connect: () => Promise<void>;
  connecting: boolean;
  connected: boolean;
  disconnect: () => Promise<void>;
  error: string | null;
}

export function useWallet(): UseWalletReturn {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }

  const { wallet, connect, connecting, connected, disconnect } = context;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (wallet && !connected && !connecting) {
      connect().catch(err => {
        const errorMessage = err.message || 'Connection failed';
        setError(errorMessage);
      });
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
