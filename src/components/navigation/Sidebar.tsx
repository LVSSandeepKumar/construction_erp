import { LayoutDashboard, Building2, Users, FileText, Package2, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useNotifications } from '../../context/NotificationsContext';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Building2, label: 'Projects', path: '/projects' },
  { icon: Users, label: 'Vendors', path: '/vendors' },
  { icon: FileText, label: 'Bills', path: '/bills' },
  { icon: Package2, label: 'Inventory', path: '/inventory' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
];

export default function Sidebar() {
  const location = useLocation();
  const { unreadCount } = useNotifications();

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">CFO Dashboard</h1>
      </div>
      <nav className="mt-6">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
              location.pathname === item.path ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <div className="flex items-center flex-1">
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </div>
            {item.label === 'Notifications' && unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}