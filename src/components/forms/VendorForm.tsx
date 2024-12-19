import React, { useState } from 'react';
import Modal from '../common/Modal';
import FormField from '../common/FormField';

interface VendorFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VendorForm({ isOpen, onClose }: VendorFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    contactEmail: '',
    contactPhone: '',
    paymentTerms: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Vendor">
      <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 sm:p-6 md:p-8">
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Add New Vendor</h1>
        <form onSubmit={handleSubmit}>
          <FormField label="Vendor Name">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </FormField>

          <FormField label="Initial Rating">
            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </FormField>

          <FormField label="Contact Email">
            <input
              type="email"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </FormField>

          <FormField label="Contact Phone">
            <input
              type="tel"
              value={formData.contactPhone}
              onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </FormField>

          <FormField label="Payment Terms">
            <textarea
              value={formData.paymentTerms}
              onChange={(e) => setFormData({ ...formData, paymentTerms: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              required
            />
          </FormField>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create Vendor
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}