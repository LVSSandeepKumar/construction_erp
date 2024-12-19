import React from 'react';
import { MapPin } from 'lucide-react';

export default function ProjectsMap() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Projects by Location</h2>
      <div className="relative h-[400px] bg-gray-100 rounded-lg">
        {/* This would be replaced with an actual map implementation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-blue-500 mx-auto" />
            <p className="mt-2 text-gray-600">Map visualization would go here</p>
          </div>
        </div>
      </div>
    </div>
  );
}