'use client';

import { motion } from 'motion/react';
import { MapPin, Package, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md"
      >
        <h1 className="text-5xl font-bold tracking-tighter mb-4 italic">CLEANER.</h1>
        <p className="text-neutral-500 mb-8">Logistics & Cleaning for Airbnb Professionals.</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link href="/login" className="p-4 border rounded-2xl hover:bg-black hover:text-white transition-colors">
            <ShieldCheck className="mx-auto mb-2" />
            <span className="text-sm font-medium">Owner</span>
          </Link>
          <Link href="/login" className="p-4 border rounded-2xl hover:bg-black hover:text-white transition-colors">
            <Truck className="mx-auto mb-2" />
            <span className="text-sm font-medium">Worker</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
