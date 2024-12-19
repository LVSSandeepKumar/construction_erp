import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import CreateButton from '../components/common/CreateButton';
import ProjectsList from '../components/dashboard/ProjectsList';
import ProjectsMap from '../components/dashboard/ProjectsMap';
import ProjectForm from '../components/forms/ProjectForm';

export default function ProjectsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreateProject = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <PageHeader 
        title="Projects Overview" 
        description="Manage and monitor all your ongoing projects"
        action={<CreateButton onClick={handleCreateProject} label="New Project" />}
      />
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 sm:p-6 md:p-8">
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Projects</h1>
        <div className="space-y-8 mt-4">
          <ProjectsMap />
          <ProjectsList />
        </div>
      </div>

      <ProjectForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}