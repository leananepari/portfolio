import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import portrait from '../../assets/portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const About = () => {

  return (
    <div id='about'>
      <div className="left-content">
        <div className="image-wrap"><img src={portrait} className="image" alt="portrait"/></div>
        <p>I am a Full-stack Developer based in Bay area. I enjoy developing functional applications and can easily adapt to a new technology.</p>
      </div>
      <div className="right-content">
        <div className="skills">
          <h2>skills</h2>
          <div className="list">
            <div className="item">JavaScript</div>
            <div className="item">React</div>
            <div className="item">Redux</div>
            <div className="item">Node</div>
            <div className="item">Express</div>
            <div className="item">Python</div>
            <div className="item">Django</div>
            <div className="item">PostgreSQL</div>
            <div className="item">Java</div>
            <div className="item">Spring</div>
          </div>
        </div>
        <div className="contact">
          <h2>contact</h2>
          <div className="list">

            <Link to="/emailme" className="item">
              <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: '#2097D1', borderBottom: '1px solid transparent' }} icon={faAt} size='lg'/> 
            </Link>

            <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://www.linkedin.com/in/leana-neparidze");}} className="item"> 
              <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: '#2097D1'}} icon={faLinkedin} size='lg'/> 
            </Link>

            <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://github.com/leananepari");}} className="item"> 
              <FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: '#2097D1'}} icon={faGithub} size='lg'/> 
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;