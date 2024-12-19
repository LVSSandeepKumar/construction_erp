import { useParams } from 'react-router-dom';
import { Building2, User2 } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

interface Bill {
  id: string;
  amount: number;
  description: string;
  status: string;
  pendingWith: string;
  date: string;
}

interface ProjectVendor {
  id: string;
  name: string;
  rating: number;
  totalSpend: number;
  pendingPayments: number;
  activeProjects: number;
  supplyCategories: string[];
  paymentStatuses: {
    amount: number;
    pendingWith: string;
    reason: string;
  }[];
}

const OfficialCard = ({ name, role, pendingBills }: { name: string; role: string; pendingBills: number }) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-blue-100 rounded-full">
        <User2 className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <div className="mt-2">
          {pendingBills === 0 ? (
            <span className="text-green-600 text-sm font-medium">All bills cleared</span>
          ) : (
            <span className="text-orange-600 text-sm font-medium">{pendingBills} bills pending</span>
          )}
        </div>
      </div>
    </div>
  </div>
);

const VendorCard = ({ vendor }: { vendor: ProjectVendor }) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <Building2 className="w-8 h-8 text-blue-500 mr-3" />
        <div>
          <h3 className="text-lg font-semibold">{vendor.name}</h3>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-gray-600 ml-1">{vendor.rating}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-4">
      <p className="text-sm text-gray-500 mb-2">Supply Categories</p>
      <div className="flex flex-wrap gap-2">
        {vendor.supplyCategories.map((category, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
          >
            {category}
          </span>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-3 gap-4 mb-4">
      <div>
        <p className="text-sm text-gray-500">Total Spend</p>
        <p className="font-semibold">${vendor.totalSpend.toLocaleString()}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Pending</p>
        <p className="font-semibold">${vendor.pendingPayments.toLocaleString()}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Active Projects</p>
        <p className="font-semibold">{vendor.activeProjects}</p>
      </div>
    </div>

    <div className="border-t pt-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">Payment Status Details</h4>
      <div className="space-y-2">
        {vendor.paymentStatuses.map((status, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className="text-gray-600">${status.amount.toLocaleString()}</span>
            <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800">
              {status.pendingWith}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function ProjectDetailPage() {
  const { projectId } = useParams();

  // This would typically come from an API or context
  const projectData = {
    name: projectId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    officials: [
      { name: "John Doe", role: "Site Engineer", pendingBills: 0 },
      { name: "Jane Smith", role: "Store Incharge", pendingBills: 2 },
      { name: "Mike Johnson", role: "Project Manager", pendingBills: 0 },
      { name: "Sarah Williams", role: "Accounts", pendingBills: 3 }
    ],
    bills: [
      {
        id: "1",
        amount: 25000,
        description: "Construction materials",
        status: "Pending",
        pendingWith: "Site Engineer",
        date: "2024-01-15"
      },
      {
        id: "2",
        amount: 35000,
        description: "Labor charges",
        status: "Approved",
        pendingWith: "Accounts",
        date: "2024-01-14"
      }
    ],
    vendors: [
      {
        id: '1',
        name: 'ABC Construction',
        rating: 4.5,
        totalSpend: 1200000,
        pendingPayments: 50000,
        activeProjects: 3,
        supplyCategories: ['Pipes', 'Plumbing Fixtures', 'Sanitary Ware'],
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
        supplyCategories: ['Electrical', 'Lighting', 'Wiring'],
        paymentStatuses: [
          {
            amount: 30000,
            pendingWith: 'Management',
            reason: 'Budget approval required'
          }
        ]
      }
    ]
  };

  return (
    <div className="space-y-8">
      <PageHeader 
        title={projectData.name || 'Project Details'} 
        description="Detailed overview of project status, officials, and vendors"
      />

      <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 sm:p-6 md:p-8">
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Project Details</h1>
        <ul className="space-y-3 mt-4">
          <li>
            <h2 className="text-xl font-semibold mb-4">Project Officials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectData.officials.map((official, index) => (
                <OfficialCard key={index} {...official} />
              ))}
            </div>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-4">Bills Status</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending With</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projectData.bills.map((bill) => (
                    <tr key={bill.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bill.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${bill.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          bill.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {bill.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.pendingWith}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-4">Project Vendors</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projectData.vendors.map(vendor => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
