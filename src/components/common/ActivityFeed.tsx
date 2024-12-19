import React from 'react';

interface Activity {
  id: string;
  text: string;
  time: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 sm:p-6 md:p-8">
      <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Activity Feed</h1>
      <ul className="space-y-3 mt-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
            <div>
              <p className="text-gray-700">{activity.text}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}