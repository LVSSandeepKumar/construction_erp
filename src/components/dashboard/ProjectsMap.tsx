import React from 'react';
import { MapPin } from 'lucide-react';

export default function ProjectsMap() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Projects Map</h1>
      <div className="relative h-[400px] bg-gray-100 rounded-lg mt-4">
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