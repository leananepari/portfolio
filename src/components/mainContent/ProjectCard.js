import React, { useState, useEffect } from 'react';

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
