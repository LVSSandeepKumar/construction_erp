import { Users } from 'lucide-react';
import { VendorPaymentStatus } from '../../types';
import PaymentStatusBadge from './PaymentStatusBadge';
import VendorStats from './VendorStats';
import { useNavigate } from 'react-router-dom';

interface VendorCardProps {
  vendor: {
    id: string;
    name: string;
    rating: number;
    totalSpend: number;
    pendingPayments: number;
    activeProjects: number;
    paymentStatuses: VendorPaymentStatus[];
  };
}

export default function VendorCard({ vendor }: VendorCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg p-6 shadow-md cursor-pointer transition-shadow hover:shadow-lg"
      onClick={() => navigate(`/vendors/${vendor.id}`)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Users className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">{vendor.name}</h3>
            <div className="flex items-center mt-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm text-gray-600 ml-1">{vendor.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <VendorStats vendor={vendor} />

      <div className="mt-4 border-t pt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Payment Status Details</h4>
        <div className="space-y-2">
          {vendor.paymentStatuses.map((status, index) => (
            <PaymentStatusBadge key={index} status={status} />
          ))}
        </div>
      </div>
    </div>
  );
}