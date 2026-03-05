'use client';

import { motion } from 'motion/react';
import { Plus, Home, Calendar, MessageSquare } from 'lucide-react';

export default function OwnerDashboard() {
  const properties = [
    { id: '1', name: 'Shoreditch Loft', status: 'READY' },
    { id: '2', name: 'Chelsea Studio', status: 'CLEANING' }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold italic">PROPERTIES</h1>
        <button className="p-3 bg-black text-white rounded-full">
          <Plus size={24} />
        </button>
      </header>

      <div className="grid gap-4">
        {properties.map((p) => (
          <motion.div 
            key={p.id}
            whileHover={{ scale: 1.01 }}
            className="p-6 bg-white border rounded-3xl flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold text-xl">{p.name}</h3>
              <p className="text-sm text-neutral-400 uppercase tracking-widest">{p.status}</p>
            </div>
            <button className="px-6 py-2 border rounded-full text-sm font-bold">MANAGE</button>
          </motion.div>
        ))}
      </div>

      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white border shadow-2xl rounded-full px-8 py-4 flex gap-12">
        <Home className="text-black" />
        <Calendar className="text-neutral-300" />
        <MessageSquare className="text-neutral-300" />
      </nav>
    </div>
  );
}
