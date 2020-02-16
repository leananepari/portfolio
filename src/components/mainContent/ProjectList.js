import React, { useState, useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";
import { projects } from '../../data';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  
  return (
    <BrowserRouter>
      <div id='projects'>
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.name}/>
        })}
      </div>
    </BrowserRouter>
  );
};

export default ProjectList;