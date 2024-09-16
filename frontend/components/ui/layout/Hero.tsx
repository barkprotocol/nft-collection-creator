"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-16 lg:py-20 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-gray-900 mb-4 sm:mb-6 lg:mb-8">Create Compressed NFT Collections with Ease</h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
        Our Compressed NFT Collection Creator empowers you to mint thousands of NFTs at a fraction of the cost. Unleash your creativity and scale your projects like never before.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button size="lg" variant="outline" className="text-lg">Select Wallet</Button>
        <Button size="lg" variant="default" className="text-lg">Create CNFT</Button>
      </div>
    </section>
  );
}
