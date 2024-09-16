"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import WalletConnectButton from "./ui/wallet-connect-button";
import { logoUrl } from "@/config";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="container mx-auto px-4 py-6 sm:py-8">
      <nav className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <img src={logoUrl} alt="cNFT Creator Logo" className="h-10 w-10 mr-2" />
          <div className="text-xl sm:text-2xl font-bold text-gray-800">CNFT Creator</div>
        </div>
        <div className="space-x-2 sm:space-x-4">
          <Button variant="ghost" className="text-sm sm:text-base">Home</Button>
          <Button variant="ghost" className="text-sm sm:text-base">Features</Button>
          <Button variant="ghost" className="text-sm sm:text-base">Use Cases</Button>
          <Button variant="ghost" className="text-sm sm:text-base">About</Button>
          <Button variant="ghost" className="text-sm sm:text-base">FAQ</Button>
          {mounted && <WalletConnectButton />}
        </div>
      </nav>
    </header>
  );
}
