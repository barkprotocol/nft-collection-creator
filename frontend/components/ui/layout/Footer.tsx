"use client";

import SubscriptionForm from '../subscription-form';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold mb-2">CNFT Creator</p>
            <p className="text-sm">© 2024 BARK Protocol. All rights reserved.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <SubscriptionForm />
          </div>
        </div>
        <div className="text-center">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-gray-400 hover:text-white"> Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
