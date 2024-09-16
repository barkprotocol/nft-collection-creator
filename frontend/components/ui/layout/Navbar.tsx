"use client";

import { Button } from "@/components/ui/button";

const logoUrl = "https://ucarecdn.com/b065ba1f-6279-4677-ae8f-0ebc1facb68d/bark_icon.png";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center p-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <img src={logoUrl} alt="Site Logo" className="h-10 w-10 mr-2" />
        <div className="text-xl font-bold">CNFT Creator</div>
      </div>
      <div className="flex space-x-4">
        <Button variant="ghost" className="text-sm sm:text-base hover:text-yellow-500">Home</Button>
        <Button variant="ghost" className="text-sm sm:text-base hover:text-yellow-500">Features</Button>
        <Button variant="ghost" className="text-sm sm:text-base hover:text-yellow-500">Use Cases</Button>
        <Button variant="ghost" className="text-sm sm:text-base hover:text-yellow-500">About</Button>
        <Button variant="ghost" className="text-sm sm:text-base hover:text-yellow-500">FAQ</Button>
      </div>
    </nav>
  );
}
