"use client";

import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your subscription logic here
    setSubscribed(true);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      {subscribed ? (
        <p className="text-lg">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-md"
          />
          <Button type="submit" variant="default" className="w-full">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}
