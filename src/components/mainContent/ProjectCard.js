import React from 'react';

const ProjectCard = ( { project }) => {
  
  return (
    <div className='project-card'>
      <div>
        {project.name}
      </div>
    </div>
  );
};

export default ProjectCard;
