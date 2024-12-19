import { Plus } from 'lucide-react';

interface CreateButtonProps {
  onClick: () => void;
  label: string;
}

export default function CreateButton({ onClick, label }: CreateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out w-full sm:w-auto"
    >
      {label !== "Read All" && <Plus className="w-5 h-5 mr-2" />}
      <span>{label}</span>
    </button>
  );
}