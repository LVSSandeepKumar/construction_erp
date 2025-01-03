import React from 'react';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  error?: string;
}

export default function FormField({ label, children, error }: FormFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {React.Children.map(children, (child) => 
        React.cloneElement(child, { className: `${child.props.className} border rounded p-2 w-full sm:w-3/4` })
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}