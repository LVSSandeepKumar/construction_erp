import React from 'react';
import PageHeader from '../components/common/PageHeader';
import CreateButton from '../components/common/CreateButton';
import { Package } from 'lucide-react';

export default function InventoryPage() {
  const handleCreateInventoryItem = () => {
    // Implementation for creating a new inventory item
    console.log('Create new inventory item');
  };

  const inventory = [
    // ... existing inventory array
  ];

  return (
    <>
      <PageHeader 
        title="Inventory Management" 
        description="Track inventory levels across all locations"
        action={<CreateButton onClick={handleCreateInventoryItem} label="Add Item" />}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 sm:p-6 md:p-8">
          <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Inventory</h1>
          <ul className="space-y-3 mt-4">
            {/* Add inventory content here */}
          </ul>
        </div>
      </div>
    </>
  );
}