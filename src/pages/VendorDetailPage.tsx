import { useParams } from 'react-router-dom';
import { Building2, MapPin } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

interface VendorProject {
  id: string;
  name: string;
  location: string;
  status: 'on-track' | 'delayed' | 'critical';
  completion: number;
  totalValue: number;
  supplyCategories: string[];
}

interface VendorBill {
  id: string;
  projectId: string;
  projectName: string;
  amount: number;
  description: string;
  status: string;
  pendingWith: string;
  date: string;
  supplyCategory: string;
}

const ProjectCard = ({ project }: { project: VendorProject }) => {
  const statusColors = {
    'on-track': 'bg-green-100 text-green-800',
    'delayed': 'bg-yellow-100 text-yellow-800',
    'critical': 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start space-x-3">
          <Building2 className="w-6 h-6 text-blue-500 mt-1" />
          <div>
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {project.location}
            </div>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 rounded-full h-2"
            style={{ width: `${project.completion}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {project.completion}% Complete
        </p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500 mb-2">Supply Categories</p>
        <div className="flex flex-wrap gap-2">
          {project.supplyCategories.map((category, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Contract Value</span>
          <span className="font-semibold">${project.totalValue.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default function VendorDetailPage() {
  const { vendorId } = useParams();

  // This would typically come from an API or context
  const vendorData = {
    id: vendorId,
    name: 'ABC Construction',
    projects: [
      {
        id: '1',
        name: 'Office Tower A',
        location: 'New York',
        status: 'on-track' as const,
        completion: 75,
        totalValue: 500000,
        supplyCategories: ['Pipes', 'Plumbing Fixtures']
      },
      {
        id: '2',
        name: 'Mall Complex B',
        location: 'Los Angeles',
        status: 'delayed' as const,
        completion: 45,
        totalValue: 300000,
        supplyCategories: ['Sanitary Ware', 'Plumbing Fixtures']
      }
    ],
    bills: [
      {
        id: '1',
        projectId: '1',
        projectName: 'Office Tower A',
        amount: 25000,
        description: 'Plumbing materials delivery',
        status: 'Pending',
        pendingWith: 'Site Engineer',
        date: '2024-01-15',
        supplyCategory: 'Pipes'
      },
      {
        id: '2',
        projectId: '1',
        projectName: 'Office Tower A',
        amount: 35000,
        description: 'Sanitary fixtures installation',
        status: 'Approved',
        pendingWith: 'Accounts',
        date: '2024-01-14',
        supplyCategory: 'Sanitary Ware'
      },
      {
        id: '3',
        projectId: '2',
        projectName: 'Mall Complex B',
        amount: 45000,
        description: 'Plumbing materials and labor',
        status: 'Pending',
        pendingWith: 'Project Manager',
        date: '2024-01-16',
        supplyCategory: 'Plumbing Fixtures'
      }
    ]
  };

  return (
    <div className="space-y-8">
      <PageHeader 
        title={vendorData.name}
        description="Detailed overview of vendor's projects and payment status"
      />

      <div>
        <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {vendorData.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Bills Status</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending With</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vendorData.bills.map((bill) => (
                <tr key={bill.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bill.projectName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bill.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-sm bg-blue-50 text-blue-700 rounded-full">
                      {bill.supplyCategory}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${bill.amount.toLocaleString()}
                  </td>
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
      </div>
    </div>
  );
}
