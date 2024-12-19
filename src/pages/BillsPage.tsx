import { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import CreateButton from '../components/common/CreateButton';

export default function BillsPage() {
  const mockBills = [
    { id: 1, name: 'Electricity Bill', amount: 100, dueDate: '2024-12-31' },
    { id: 2, name: 'Water Bill', amount: 50, dueDate: '2024-12-31' }
  ];

  const [bills, setBills] = useState(mockBills);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    dueDate: ''
  });

  const addBill = (newBill: { id: number; name: string; amount: number; dueDate: string; }) => {
    setBills([...bills, newBill]);
    setIsModalOpen(false);
    setFormData({ name: '', amount: '', dueDate: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBill = {
      id: bills.length + 1,
      name: formData.name,
      amount: parseFloat(formData.amount),
      dueDate: formData.dueDate
    };
    addBill(newBill);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <PageHeader 
        title="Bill Management" 
        description="Track and manage all pending and approved bills"
        action={<CreateButton onClick={() => setIsModalOpen(true)} label="Add Bill" />}
      />
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className='p-6'>
          <h1 className='font-bold text-2xl'>Bills</h1>
          <ul className="space-y-3 mt-4">
            {bills.map(bill => (
              <li key={bill.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">{bill.name}</span>
                  <span className="text-sm text-gray-500">Due: {bill.dueDate}</span>
                </div>
                <span className="text-lg font-semibold text-green-600">${bill.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Bill</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Bill Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Add Bill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}