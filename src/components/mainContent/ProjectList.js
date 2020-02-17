import React from 'react';
import { projects } from '../../data';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  
  return (
 
    <div id='projects'>
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.name}/>
      })}
    </div>

  );
};

export default ProjectList;