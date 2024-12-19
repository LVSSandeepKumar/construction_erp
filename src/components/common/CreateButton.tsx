import { Plus } from 'lucide-react';

interface CreateButtonProps {
  onClick: () => void;
  label: string;
}

export default function CreateButton({ onClick, label }: CreateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 
        text-white rounded-md shadow-sm transition-colors duration-200"
    >
      {label !== "Read All" && <Plus className="w-5 h-5 mr-2" />}
      <span>{label}</span>
    </button>
  );
}