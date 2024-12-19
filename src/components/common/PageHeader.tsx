import React, { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-8 flex justify-between items-start">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h1 className="font-bold text-lg sm:text-xl">{title}</h1>
        {description && <p className="text-sm sm:text-base">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}