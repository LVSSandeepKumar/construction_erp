import { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import CreateButton from '../components/common/CreateButton';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { useNotifications } from '../context/NotificationsContext';

export default function NotificationsPage() {
  const { notifications, setNotifications } = useNotifications();

  const mockNotifications = [
    {
      id: 1,
      title: "New Bill Due",
      message: "Electricity bill payment is due in 3 days",
      type: "warning",
      date: "2024-12-22",
      isRead: false
    },
    {
      id: 2,
      title: "Payment Successful",
      message: "Water bill payment was processed successfully",
      type: "success",
      date: "2024-12-19",
      isRead: false
    },
    {
      id: 3,
      title: "System Maintenance",
      message: "Scheduled maintenance on December 25th",
      type: "info",
      date: "2024-12-25",
      isRead: false
    },
    {
      id: 4,
      title: "Late Payment Alert",
      message: "Internet bill payment is overdue",
      type: "error",
      date: "2024-12-18",
      isRead: false
    }
  ];

  useEffect(() => {
    if (notifications.length === 0) {
      setNotifications(mockNotifications);
    }
  }, []);

  const handleReadAll = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <>
      <PageHeader 
        title="Notifications" 
        description="Stay updated with important alerts and information"
        action={<CreateButton onClick={handleReadAll} label="Read All" />}
      />
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className='p-6'>
          <h1 className='font-bold text-2xl'>Alerts</h1>
          <ul className="space-y-3 mt-4">
            {notifications.map(notification => (
              <li 
                key={notification.id} 
                className={`flex items-center p-4 rounded-lg transition-colors ${
                  notification.isRead ? 'bg-gray-50' : 'bg-blue-50'
                } hover:bg-gray-100`}
              >
                <div className="flex-shrink-0 mr-4">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900">{notification.title}</span>
                    <span className="text-sm text-gray-500">{notification.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}