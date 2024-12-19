import React from 'react';
import { Activity, DollarSign, Package, AlertCircle } from 'lucide-react';

const MetricCard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
        {trend && (
          <p className={`text-sm mt-2 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% vs last month
          </p>
        )}
      </div>
      <Icon className="w-8 h-8 text-blue-500" />
    </div>
  </div>
);

export default function MetricsOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 sm:p-6 md:p-8">
      <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Metrics Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <MetricCard
          title="Total Projects"
          value="24"
          icon={Activity}
          trend={5.2}
        />
        <MetricCard
          title="Total Spend"
          value="$2.4M"
          icon={DollarSign}
          trend={-2.1}
        />
        <MetricCard
          title="Inventory Value"
          value="$890K"
          icon={Package}
          trend={1.8}
        />
        <MetricCard
          title="Pending Bills"
          value="32"
          icon={AlertCircle}
          trend={-8.5}
        />
      </div>
    </div>
  );
}