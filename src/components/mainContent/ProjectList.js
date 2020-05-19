import React, { useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { projects } from '../../data';
import ProjectCard from './ProjectCard';
import video from '../../assets/to-do-video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';

const ProjectList = () => {
  
  useEffect(() => {
    document.querySelector('video').playbackRate = 2;
  })
  return (
    // PREVIOUS PROJECT LIST
    // <div id='projects'>
    //   {/* {projects.map((project) => {
    //     return <ProjectCard project={project} key={project.name}/>
    //   })} */}
    //   <p style={{margin: '100px'}}>Updating project list</p>
    // </div>

    <div className="content" style={{marginTop: '120px'}}>
      <div className="project-description">
        <div style={{display: 'flex'}}>
          <h1>Task Manager App</h1>
          <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open('https://github.com/leananepari/to-do-app');}} className="icon"> 
            <FontAwesomeIcon style={{width: '20px', cursor: 'pointer', color: '#2097D1', marginRight: '10px'}} icon={faGithub} size='lg'/> 
          </Link>
        </div>
        <div>
          Currently working on building a full-stack application that lets you add tasks, set due dates, get reminders, and customize themes.
        </div>
        <div className="tech">
          <h2>Front End:</h2>
          <p>React</p>
          <h2>Back End:</h2>
          <p>Spring</p>
        </div>
      </div>
      <div className="video-wrap">
        <video loop autoPlay muted={true} >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default ProjectList;