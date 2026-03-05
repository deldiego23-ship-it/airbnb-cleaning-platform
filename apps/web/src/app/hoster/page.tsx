'use client';

import { motion } from 'motion/react';
import { Package, CheckCircle, Printer, ArrowLeft } from 'lucide-react';

export default function HosterDashboard() {
  const pendingBags = [
    { id: '1', orderId: 'ORD-101', property: 'Shoreditch Loft' },
    { id: '2', orderId: 'ORD-102', property: 'Chelsea Studio' }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold italic">BAG PREP</h1>
        <p className="text-neutral-400">Prepare kits for upcoming check-ins.</p>
      </header>

      <div className="space-y-6">
        {pendingBags.map((bag) => (
          <motion.div 
            key={bag.id}
            className="p-8 bg-white border rounded-[32px] shadow-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-bold bg-neutral-100 px-3 py-1 rounded-full uppercase tracking-tighter">Pending Prep</span>
                <h3 className="text-2xl font-bold mt-2">{bag.property}</h3>
                <p className="text-neutral-500">Order: {bag.orderId}</p>
              </div>
              <button className="p-4 bg-neutral-50 rounded-2xl">
                <Printer size={20} />
              </button>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle size={16} className="text-neutral-300" />
                <span>2x Double Bed Linen Sets</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle size={16} className="text-neutral-300" />
                <span>4x Large Towels</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle size={16} className="text-neutral-300" />
                <span>Coffee & Tea Restock Kit</span>
              </div>
            </div>

            <button className="w-full py-4 bg-black text-white rounded-2xl font-bold">
              MARK AS READY
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
