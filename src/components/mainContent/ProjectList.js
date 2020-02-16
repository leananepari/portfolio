import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
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
      <div className="projects-about-button">
          <NavLink className="linkReg" smooth to="/#about" activeClassName="activeRoute">
                about</NavLink>
          <NavLink className="icon" smooth to="/#about" activeClassName="activeRoute">
            <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: '#2097D1'}} icon={faAngleDown} size='lg'/>
          </NavLink>
      </div>
    </BrowserRouter>
  );
};

export default ProjectList;