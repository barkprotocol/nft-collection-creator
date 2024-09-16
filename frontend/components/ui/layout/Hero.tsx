"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/useWallet";
import { Spinner } from "@/components/ui/spinner";

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const { connected, connect, disconnect, error } = useWallet();

  // Handle wallet selection
  const handleSelectWallet = async () => {
    setLoading(true);
    try {
      if (!connected) {
        await connect();
      } else {
        await disconnect();
      }
    } catch (err) {
      console.error('Error connecting/disconnecting wallet:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle NFT creation
  const handleCreateCNFT = () => {
    console.log('Creating CNFT...');
    // Example logic: redirect to a different page or show a form
  };

  return (
    <section className="container mx-auto px-4 py-10 sm:py-16 lg:py-20 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-gray-900 mb-4 sm:mb-6 lg:mb-8">
        Create Compressed NFT Collections with Ease
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
        Our Compressed NFT Collection Creator empowers you to mint thousands of NFTs at a fraction of the cost. Unleash your creativity and scale your projects like never before.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          size="lg"
          variant="outline"
          className="text-lg border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
          onClick={handleSelectWallet}
          disabled={loading}
        >
          {loading ? <Spinner /> : (connected ? 'Disconnect Wallet' : 'Select Wallet')}
        </Button>
        <Button
          size="lg"
          variant="default"
          className="text-lg bg-gray-800 text-white hover:bg-gray-700"
          onClick={handleCreateCNFT}
          disabled={loading}
        >
          Create CNFT
        </Button>
      </div>
      {error && (
        <p className="mt-4 text-red-500 text-sm">An error occurred: {error.message}</p>
      )}
    </section>
  );
}
