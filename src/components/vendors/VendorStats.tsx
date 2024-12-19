import React from 'react';

interface VendorStatsProps {
  vendor: {
    totalSpend: number;
    pendingPayments: number;
    activeProjects: number;
  };
}

export default function VendorStats({ vendor }: VendorStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <p className="text-sm text-gray-500">Total Spend</p>
        <p className="font-semibold">${vendor.totalSpend.toLocaleString()}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Pending Payments</p>
        <p className="font-semibold">${vendor.pendingPayments.toLocaleString()}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Active Projects</p>
        <p className="font-semibold">{vendor.activeProjects}</p>
      </div>
    </div>
  );
}