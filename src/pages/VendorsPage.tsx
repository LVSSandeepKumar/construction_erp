import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import CreateButton from '../components/common/CreateButton';
import VendorCard from '../components/vendors/VendorCard';
import VendorForm from '../components/forms/VendorForm';
import type { Vendor } from '../types';

export default function VendorsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreateVendor = () => {
    setIsFormOpen(true);
  };

  const vendors: Vendor[] = [
    {
      id: '1',
      name: 'ABC Construction',
      rating: 4.5,
      totalSpend: 1200000,
      pendingPayments: 50000,
      activeProjects: 3,
      paymentStatuses: [
        {
          amount: 25000,
          pendingWith: 'Site Engineer',
          reason: 'Pending site inspection'
        },
        {
          amount: 25000,
          pendingWith: 'Accounts',
          reason: 'Documentation verification'
        }
      ]
    },
    {
      id: '2',
      name: 'XYZ Suppliers',
      rating: 4.2,
      totalSpend: 800000,
      pendingPayments: 30000,
      activeProjects: 2,
      paymentStatuses: [
        {
          amount: 30000,
          pendingWith: 'Management',
          reason: 'Budget approval required'
        }
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Vendor Management" 
        description="Track and manage your vendor relationships and payment statuses"
        action={<CreateButton onClick={handleCreateVendor} label="Add Vendor" />}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {vendors.map(vendor => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>

      <VendorForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}