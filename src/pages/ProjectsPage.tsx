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
      
      <div className="space-y-8">
        <ProjectsMap />
        <ProjectsList />
      </div>

      <ProjectForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}