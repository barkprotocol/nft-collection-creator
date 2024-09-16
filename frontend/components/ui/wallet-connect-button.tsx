import { Button } from "@/components/ui/button";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@/hooks/useWallet';

export default function WalletConnectButton() {
  const { connected, disconnect, error } = useWallet();

  if (error) {
    return <Button variant="destructive">Error: {error}</Button>;
  }

  if (connected) {
    return <Button variant="dark" onClick={() => disconnect()}>Disconnect</Button>;
  }

  return <WalletMultiButton className="bg-gray-800 text-white hover:bg-gray-700" />;
}
