import React from 'react';
import { projects } from '../../data';
import ProjectCard from './ProjectCard';
import { Player } from 'video-react';

const ProjectList = () => {
  
  return (
 
    <div id='projects'>
      {/* {projects.map((project) => {
        return <ProjectCard project={project} key={project.name}/>
      })} */}
      <p style={{margin: '100px'}}>Updating project list</p>
    </div>
  );
};

export default ProjectList;