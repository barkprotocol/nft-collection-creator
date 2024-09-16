"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Zap, Shield, Coins } from "lucide-react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import WalletConnectButton from "@/components/ui/wallet-connect-button";
import '@solana/wallet-adapter-react-ui/styles.css';

const logoUrl = "https://ucarecdn.com/b065ba1f-6279-4677-ae8f-0ebc1facb68d/bark_icon.png";

const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
];

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <header className="container mx-auto px-4 py-6 sm:py-8">
              <nav className="flex flex-wrap justify-between items-center">
                <div className="flex items-center">
                  <img src={logoUrl} alt="CNFT Creator Logo" className="h-10 w-10 mr-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-800">CNFT Creator</div>
                </div>
                <div className="flex space-x-2 sm:space-x-4">
                  <Button variant="ghost" className="text-sm sm:text-base">Home</Button>
                  <Button variant="ghost" className="text-sm sm:text-base">Features</Button>
                  <Button variant="ghost" className="text-sm sm:text-base">Use Cases</Button>
                  <Button variant="ghost" className="text-sm sm:text-base">About</Button>
                  <Button variant="ghost" className="text-sm sm:text-base">FAQ</Button>
                  {mounted && <WalletConnectButton />}
                </div>
              </nav>
            </header>

            <main>
              <section className="container mx-auto px-4 py-10 sm:py-16 lg:py-20 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-gray-900 mb-4 sm:mb-6 lg:mb-8">
                  Create Compressed NFT Collections with Ease
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
                  Our Compressed NFT Collection Creator empowers you to mint thousands of NFTs at a fraction of the cost. Unleash your creativity and scale your projects like never before.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" variant="default" className="text-lg bg-gray-800 text-white hover:bg-gray-700">
                    Select Wallet
                  </Button>
                  <Button size="lg" variant="default" className="text-lg">Create CNFT</Button>
                </div>
              </section>

              <section className="bg-gray-100 py-10 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                      icon={<Zap className="h-8 w-8 text-blue-500" />}
                      title="Cost-Effective"
                      description="Mint thousands of NFTs with reduced costs."
                    />
                    <FeatureCard
                      icon={<Shield className="h-8 w-8 text-green-500" />}
                      title="Secure"
                      description="Ensure the security and authenticity of your NFTs."
                    />
                    <FeatureCard
                      icon={<Coins className="h-8 w-8 text-yellow-500" />}
                      title="Efficient"
                      description="Streamline the creation and management of your NFT collections."
                    />
                  </div>
                </div>
              </section>
            </main>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
}
