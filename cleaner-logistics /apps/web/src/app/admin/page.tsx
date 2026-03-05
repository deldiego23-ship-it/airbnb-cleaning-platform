'use client';

import { motion } from 'motion/react';
import { Shield, Users, Activity, Check, X, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  const evidenceQueue = [
    { id: '1', worker: 'John (Cleaner)', property: 'Shoreditch Loft', type: 'CLEANING_PROOF' },
    { id: '2', worker: 'Mike (Motoboy)', property: 'Chelsea Studio', type: 'DELIVERY_PROOF' }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-5xl font-bold italic tracking-tighter">CONTROL.</h1>
          <p className="text-neutral-400">Platform Oversight & Evidence Review</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-xs font-bold text-neutral-400 uppercase">Active Orders</p>
            <p className="text-2xl font-bold">42</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-neutral-400 uppercase">Pending Review</p>
            <p className="text-2xl font-bold text-red-500">12</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Evidence Queue</h3>
          {evidenceQueue.map((item) => (
            <div key={item.id} className="p-6 bg-white border rounded-3xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center">
                  <Activity size={24} className="text-neutral-400" />
                </div>
                <div>
                  <p className="font-bold">{item.property}</p>
                  <p className="text-sm text-neutral-500">{item.worker} • {item.type}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors">
                  <X size={20} />
                </button>
                <button className="p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors">
                  <Check size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">System Health</h3>
          <div className="p-8 bg-black text-white rounded-[40px]">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-accent" />
              <span className="font-bold">Security Status</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="opacity-50">Geofence Violations</span>
                <span className="font-mono">0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-50">Late Deliveries</span>
                <span className="font-mono text-red-400">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
