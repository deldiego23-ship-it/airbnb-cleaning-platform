'use client';

import { useState } from 'react';
import { QrCode, Truck, Sparkles, Camera } from 'lucide-react';

export default function WorkerDashboard() {
  const [mode, setMode] = useState<'MOTOBOY' | 'CLEANER'>('MOTOBOY');
  const [scanning, setScanning] = useState(false);

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-8">
        <div className="flex bg-neutral-100 rounded-full p-1">
          <button 
            onClick={() => setMode('MOTOBOY')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${mode === 'MOTOBOY' ? 'bg-black text-white' : 'text-neutral-400'}`}
          >
            MOTOBOY
          </button>
          <button 
            onClick={() => setMode('CLEANER')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${mode === 'CLEANER' ? 'bg-black text-white' : 'text-neutral-400'}`}
          >
            CLEANER
          </button>
        </div>
      </header>

      <div className="bg-black text-white p-8 rounded-[40px] mb-8">
        <h2 className="text-3xl font-bold mb-2">ACTIVE TASK</h2>
        <p className="opacity-50 mb-6">Deliver Bag #442 to Shoreditch Loft</p>
        <button 
          onClick={() => setScanning(true)}
          className="w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2"
        >
          <QrCode size={20} />
          SCAN BAG QR
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Available Offers</h3>
        <div className="p-6 border rounded-3xl bg-white flex justify-between items-center">
          <div>
            <p className="font-bold">Cleaning: Chelsea Studio</p>
            <p className="text-sm text-neutral-400">Available at 11:00 AM</p>
          </div>
          <button className="bg-neutral-100 px-4 py-2 rounded-full text-xs font-bold">ACCEPT</button>
        </div>
      </div>
    </div>
  );
}
