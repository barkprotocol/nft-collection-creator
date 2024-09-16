// components/ui/wallet-connect-button.tsx

import { Button } from "@/components/ui/button";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@/hooks/useWallet';

export default function WalletConnectButton() {
  const { connected, disconnect, error } = useWallet();

  if (error) {
    return <Button variant="destructive">Error: {error}</Button>;
  }

  if (connected) {
    return <Button variant="outline" onClick={() => disconnect()}>Connected</Button>;
  }

  return <WalletMultiButton className="bg-primary text-primary-foreground hover:bg-primary/90" />;
}
