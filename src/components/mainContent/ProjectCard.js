import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';


const ProjectCard = ( { project }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  }

  const handleCancel = () => {
    setClick(false);
  }
  
  if (click === false) {
    return (
      <div className='project-card' onClick={handleClick} style={{backgroundImage: `${project.name === "Sleep Mood" ? 'url("https://i.imgur.com/QHWwH4G.png")' : ''}`,
                                            backgroundColor: `${project.name === "Bookr" ? '#0F5814' : project.name === "Treasure Hunt" ? '#4c3a1e' : project.name === "Speak Out" ? '#12546f' : 'transparent'}`}}>
        <div className="logo">
          <div style={{height: `${project.name === "Treasure Hunt" ? "100px" : "60px"}`}}><img src={project.img} alt="logo" style={{maxWidth: '100%', maxHeight: '100%'}}/></div>
        </div>
        <div className="technologies">
            {project.technologies.map((item, index) => {
              return <div className="item" key={index}>{item}</div>
            })}
          </div>
      </div>
    );
  } else {
    return (
      <div className='project-card'>
        <div className="description">
          <div className="title-wrap">
            <div>
              <h1>{project.name}</h1>
            </div>
            <div>
              <FontAwesomeIcon onClick={handleCancel} style={{width: '18px', cursor: 'pointer', color: 'gray'}} icon={faTimes} size='lg'/> 
            </div>
          </div>
          <div className="about-project">
            <h2>{project.short_description}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open(`${project.githubLink}`);}} className="icon"> 
                <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: '#2097D1', marginRight: '10px'}} icon={faGithub} size='lg'/> 
              </Link>
              <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open(`${project.pageLink}`);}} className="icon"> 
                <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: '#2097D1' }} icon={faGlobe} size='lg'/> 
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectCard;
