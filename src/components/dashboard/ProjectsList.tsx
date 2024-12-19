import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Official {
  role: string;
  pendingBills: number;
}

interface Project {
  name: string;
  location: string;
  status: 'on-track' | 'delayed' | 'critical';
  completion: number;
  budgetSpent: number;
  pendingBills: number;
  officials: Official[];
}

const OfficialStatusDropdown = ({ officials }: { officials: Official[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800"
      >
        <span>Officials Status</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 bg-white rounded-md shadow-lg p-2 border">
          {officials.map((official, index) => (
            <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50">
              <span className="text-sm">{official.role}</span>
              {official.pendingBills === 0 ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <span className="text-sm text-gray-600">{official.pendingBills} pending</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();
  const statusColors = {
    'on-track': 'bg-green-100 text-green-800',
    'delayed': 'bg-yellow-100 text-yellow-800',
    'critical': 'bg-red-100 text-red-800'
  };

  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-md cursor-pointer transition-shadow hover:shadow-lg"
      onClick={() => navigate(`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`)}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{project.location}</p>
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

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-500">Budget Spent</p>
          <p className="font-semibold">${project.budgetSpent.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Pending Bills</p>
          <p className="font-semibold">${project.pendingBills.toLocaleString()}</p>
        </div>
        <div className="mt-4">
          <OfficialStatusDropdown officials={project.officials} />
        </div>
      </div>
    </div>
  );
};

export default function ProjectsList() {
  const projects: Project[] = [
    {
      name: "Office Tower A",
      location: "New York",
      status: "on-track",
      completion: 75,
      budgetSpent: 1200000,
      pendingBills: 50000,
      officials: [
        { role: "Site Engineer", pendingBills: 0 },
        { role: "Store Incharge", pendingBills: 2 },
        { role: "Project Manager", pendingBills: 0 },
        { role: "Accounts", pendingBills: 3 }
      ]
    },
    {
      name: "Mall Complex B",
      location: "Los Angeles",
      status: "delayed",
      completion: 45,
      budgetSpent: 800000,
      pendingBills: 120000,
      officials: [
        { role: "Site Engineer", pendingBills: 4 },
        { role: "Store Incharge", pendingBills: 1 },
        { role: "Project Manager", pendingBills: 2 },
        { role: "Accounts", pendingBills: 0 }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 sm:p-6 md:p-8">
      <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Projects List</h1>
      <ul className="space-y-3 mt-4">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}