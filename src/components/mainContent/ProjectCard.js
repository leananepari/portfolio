import React from 'react';

const ProjectCard = ( { project }) => {
  
  return (
    <div className='project-card' style={{backgroundImage: `${project.name === "Sleep Mood" ? 'url("https://i.imgur.com/QHWwH4G.png")' : ''}`,
    backgroundColor: `${project.name === "Bookr" ? '#0F5814' : project.name === "Treasure Hunt" ? '#4c3a1e' : project.name === "Speak Out" ? '#12546f' : 'transparent'}`}}>
      <div className={project.class_name}>
        <div style={{height: `${project.name === "Treasure Hunt" ? "100px" : "60px"}`}}><img src={project.img} alt="logo" style={{maxWidth: '100%', maxHeight: '100%'}}/></div>
        {/* <h1 >{project.name}</h1> */}
      </div>
    </div>
  );
};

export default ProjectCard;

// "name": "Speak Out",
// "img": speak_out_img,
// "class_name": "speak_out",
// "technologies": [],
// "description": "",
// "githubLink": "",
// "pageLink": ""