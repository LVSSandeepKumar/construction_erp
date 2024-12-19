import React from 'react';
import PageHeader from '../components/common/PageHeader';
import MetricsOverview from '../components/dashboard/MetricsOverview';
import ProjectsMap from '../components/dashboard/ProjectsMap';
import ProjectsList from '../components/dashboard/ProjectsList';
import ActivityFeed from '../components/common/ActivityFeed';

const recentActivities = [
  { id: '1', text: "New bill approved for Project A", time: "2 hours ago" },
  { id: '2', text: "Inventory alert: Low stock in LA warehouse", time: "4 hours ago" },
  { id: '3', text: "Payment processed for Vendor XYZ", time: "6 hours ago" },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader 
        title="Financial Overview" 
        description="Welcome back! Here's what's happening today."
      />
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 sm:p-6 md:p-8">
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Dashboard</h1>
        <div className="space-y-8 mt-4">
          <MetricsOverview />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectsMap />
            <ActivityFeed activities={recentActivities} />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
            <ProjectsList />
          </div>
        </div>
      </div>
    </>
  );
}