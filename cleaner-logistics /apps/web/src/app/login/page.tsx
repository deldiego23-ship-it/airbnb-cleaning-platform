'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // In MVP, we just simulate login
    if (email.includes('owner')) router.push('/owner');
    else if (email.includes('worker')) router.push('/worker');
    else router.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form onSubmit={handleLogin} className="w-full max-w-sm p-8 space-y-6">
        <h2 className="text-3xl font-bold italic">LOGIN</h2>
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-4 border rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-4 border rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full p-4 bg-black text-white rounded-xl font-bold">
          CONTINUE
        </button>
      </form>
    </div>
  );
}
