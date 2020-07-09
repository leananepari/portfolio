import React, { useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { projects } from '../../data';
import ProjectCard from './ProjectCard';
import video_To_Do from '../../assets/to-do-video.mp4';
import video_Game_of_Life from '../../assets/game-of-life.mp4';
import video_speak_out from '../../assets/speak-out-vid-new.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon style={{width: '20px', cursor: 'pointer', color: '#787878', marginRight: '10px', border: '1px solid #FFEA03', borderRadius: '50%'}} icon={faGithub} size='lg'/> 
          </Link>
        </div>
        <div>
          Currently working on building a full-stack application that lets you add tasks, set due dates, get reminders, and customize themes.
        </div>
        <div className="tech">
          <h2>Front End:</h2>
          <p>React, Redux, Saas</p>
          <h2>Back End:</h2>
          <p>Spring, PostgreSQL</p>
        </div>
      </div>
      <div className="video-wrap">
        <video loop autoPlay muted={true} playsInline>
          <source src={video_To_Do} type="video/mp4" />
        </video>
      </div>

      <div className="project-description">
        <div style={{display: 'flex'}}>
          <h1>Game of Life</h1>
          <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open('https://github.com/leananepari/game-of-life');}} className="icon"> 
            <FontAwesomeIcon style={{width: '20px', cursor: 'pointer', color: '#787878', marginRight: '10px', border: '1px solid #FFEA03', borderRadius: '50%'}} icon={faGithub} size='lg'/> 
          </Link>
          <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open('https://game-of-life-roan.vercel.app/');}} className="icon"> 
            <FontAwesomeIcon style={{width: '20px', cursor: 'pointer', color: '#787878', marginRight: '10px', border: '1px solid #FFEA03', borderRadius: '50%'}} icon={faGlobe} size='lg'/> 
          </Link>
        </div>
        <div>
          A fun, small project I got to build while going through computer science build week with my students.
        </div>
        <div className="tech">
          <h2>Front End:</h2>
          <p>React, Saas</p>
        </div>
      </div>
      <div className="video-wrap">
        <video loop autoPlay muted={true} playsInline >
          <source src={video_Game_of_Life} type="video/mp4" />
        </video>
      </div>

      <div className="project-description">
        <div style={{display: 'flex'}}>
          <h1>Speak Out, An English Language School</h1>
          <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open('https://github.com/Lambda-School-Labs/speak-out-fe');}} className="icon"> 
            <FontAwesomeIcon style={{width: '20px', cursor: 'pointer', color: '#787878', marginRight: '10px', border: '1px solid #FFEA03', borderRadius: '50%'}} icon={faGithub} size='lg'/> 
          </Link>
        </div>
        <div>
          <div>Speak Out is an English Language School for Children that provides quality English learning to low
          income families in Bahrain at affordable prices.
          </div>

          <div>
            <div style={{fontStyle: 'italic', fontWeight: '400'}}>Worked as a full stack developer with a team of 6 developers and a UX designer.</div>
            <li>Led front end development</li>
            <li>Implemented authentication, form handling, state management</li>
            <li>Built functionalities such as registration, progress reports, and class enrollment </li>
          </div>

        </div>
        <div className="tech">
          <h2>Front End:</h2>
          <p>React, Redux, Saas</p>
          <h2>Back End:</h2>
          <p>Node.js, PostgreSQL, AWS</p>
        </div>
      </div>
      <div className="video-wrap">
        <video loop autoPlay muted={true} playsInline>
          <source src={video_speak_out} type="video/mp4" />
        </video>
      </div>

    </div>
  );
};

export default ProjectList;