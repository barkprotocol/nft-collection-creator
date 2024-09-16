"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WalletIcon, TreeStructure, Image, Coins } from "lucide-react";

export default function MintingComponent() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">Compressed NFT Minting Guide</h1>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="step1">
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <WalletIcon className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium">1. Connect your wallet</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-4 text-muted">Connect your wallet to get started. You may need to airdrop some SOL if you're on devnet.</p>
            <div className="flex flex-col space-y-2">
              <Button className="w-full">Connect Wallet</Button>
              <Button variant="outline" className="w-full">Airdrop SOL (Devnet)</Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="step2">
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <TreeStructure className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium">2. Create or set Merkle tree</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-4 text-muted">Create a new Merkle tree or set an address of an existing one. Use the calculator for tree parameters.</p>
            <Input placeholder="Merkle tree address" className="mb-2 w-full" />
            <Button className="w-full">Calculate Merkle Tree Parameters</Button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="step3">
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <Image className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium">3. Create or set Collection NFT</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="collection-image">Collection Image</Label>
                <Input id="collection-image" placeholder="Image URL or upload to Arweave" className="w-full" />
                <Button className="mt-2 w-full">Upload to Arweave</Button>
              </div>
              <div>
                <Label htmlFor="collection-metadata">Collection Metadata</Label>
                <Input id="collection-metadata" placeholder="Metadata URL or upload file" className="w-full" />
                <Button className="mt-2 w-full">Upload Metadata</Button>
              </div>
              <div>
                <Label htmlFor="collection-name">Collection Name (required)</Label>
                <Input id="collection-name" placeholder="Enter collection name" className="w-full" />
              </div>
              <div>
                <Label htmlFor="collection-symbol">Collection Symbol (optional)</Label>
                <Input id="collection-symbol" placeholder="Enter collection symbol" className="w-full" />
              </div>
              <Button className="w-full">Create Collection NFT</Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="step4">
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <Coins className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium">4. Mint cNFTs to addresses</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cnft-image">cNFT Image</Label>
                <Input id="cnft-image" placeholder="Image URL or upload to Arweave" className="w-full" />
                <Button className="mt-2 w-full">Upload to Arweave</Button>
              </div>
              <div>
                <Label htmlFor="cnft-metadata">cNFT Metadata</Label>
                <Input id="cnft-metadata" placeholder="Metadata URL or upload file" className="w-full" />
                <Button className="mt-2 w-full">Upload Metadata</Button>
              </div>
              <div>
                <Label htmlFor="cnft-name">cNFT Name</Label>
                <Input id="cnft-name" placeholder="Enter cNFT name" className="w-full" />
              </div>
              <div>
                <Label htmlFor="cnft-symbol">cNFT Symbol</Label>
                <Input id="cnft-symbol" placeholder="Enter cNFT symbol" className="w-full" />
              </div>
              <div>
                <Label htmlFor="mint-addresses">Mint Addresses</Label>
                <Input id="mint-addresses" placeholder="Enter comma-separated addresses" className="w-full" />
              </div>
              <Button className="w-full">Mint cNFTs</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
