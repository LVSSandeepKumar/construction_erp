import { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import CreateButton from '../components/common/CreateButton';
import QrReader from 'react-qr-reader';
import { toast } from 'react-toastify';
import Modal from '../components/common/Modal'; // Assuming Modal component is in this location

export default function BillsPage() {
  const mockBills = [
    { id: 1, name: 'Electricity Bill', amount: 100, dueDate: '2024-12-31' },
    { id: 2, name: 'Water Bill', amount: 50, dueDate: '2024-12-31' }
  ];

  const [bills, setBills] = useState(mockBills);
  const [scanning, setScanning] = useState(false);

  const addBill = (newBill: { id: number; name: string; amount: number; dueDate: string; }) => {
    setBills([...bills, newBill]);
    setScanning(false);
    toast.success('Bill updated successfully!');
  };

  const handleCamera = () => {
    setScanning(true);
  };

  const handleScan = (data: any) => {
    if (data) {
      const newBill = {
        id: bills.length + 1,
        name: 'Scanned Bill',
        amount: 0,
        dueDate: new Date().toISOString().split('T')[0]
      };
      addBill(newBill);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div className="max-w-screen-md mx-auto p-4 md:p-6 lg:p-8">
      <PageHeader 
        title="Bill Management" 
        description="Track and manage all pending and approved bills"
        action={<CreateButton onClick={handleCamera} label="Add Bill" />}
      />
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full mx-auto p-4 md:p-6 lg:p-8">
        <h1 className='font-bold text-lg md:text-xl lg:text-2xl'>Bills</h1>
        <ul className="space-y-3 mt-4">
          {bills.map(bill => (
            <li key={bill.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex flex-col">
                <span className="font-medium text-gray-900 text-sm md:text-base lg:text-lg">{bill.name}</span>
                <span className="text-xs md:text-sm lg:text-base text-gray-500">Due: {bill.dueDate}</span>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-semibold text-green-600">${bill.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      <Modal isOpen={scanning} onClose={() => setScanning(false)} title="Scan QR Code">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      </Modal>
    </div>
  );
}