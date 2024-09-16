"use client";

import SubscriptionForm from '../subscription-form';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img
              src="https://ucarecdn.com/b8f69bea-d5a8-4683-b6d9-bc07cf076100/barklogodark.png"
              alt="CNFT Creator Logo"
              className="h-12 w-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-2xl font-bold mb-2">CNFT Creator</p>
            <p className="text-sm">© 2024 BARK Protocol. All rights reserved.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <SubscriptionForm />
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 mt-6 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="/privacy-policy" className="text-gray-400 hover:text-gray-100">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-of-service" className="text-gray-400 hover:text-gray-100">Terms of Service</a>
          </div>
          <p className="text-sm text-gray-400">
            Follow us on
            <a href="https://x.com/bark_protocol" className="text-gray-200 hover:text-gray-100 ml-2">X</a> |
            <a href="https://github.com/barkprotocol" className="text-gray-200 hover:text-gray-100 ml-2">GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
