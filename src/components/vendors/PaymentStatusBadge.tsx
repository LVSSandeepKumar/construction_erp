import React from 'react';
import { AlertCircle, Clock, UserCheck, Building2 } from 'lucide-react';
import { VendorPaymentStatus } from '../../types';

interface PaymentStatusBadgeProps {
  status: VendorPaymentStatus;
}

export default function PaymentStatusBadge({ status }: PaymentStatusBadgeProps) {
  const getStatusIcon = () => {
    switch (status.pendingWith) {
      case 'Junior Engineer':
        return <UserCheck className="w-4 h-4" />;
      case 'Site Engineer':
        return <Building2 className="w-4 h-4" />;
      case 'Accounts':
        return <Clock className="w-4 h-4" />;
      case 'Management':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status.pendingWith) {
      case 'Junior Engineer':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Site Engineer':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Accounts':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Management':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className={`flex items-center justify-between p-2 rounded-md border ${getStatusColor()}`}>
      <div className="flex items-center space-x-2">
        {getStatusIcon()}
        <span className="text-sm">
          ${status.amount.toLocaleString()} - {status.pendingWith}
        </span>
      </div>
      <span className="text-xs opacity-75">{status.reason}</span>
    </div>
  );
}