"use client";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center p-4">
      <Button variant="ghost" className="text-sm sm:text-base">Home</Button>
      <Button variant="ghost" className="text-sm sm:text-base">Features</Button>
      <Button variant="ghost" className="text-sm sm:text-base">Use Cases</Button>
      <Button variant="ghost" className="text-sm sm:text-base">About</Button>
      <Button variant="ghost" className="text-sm sm:text-base">FAQ</Button>
    </nav>
  );
}
