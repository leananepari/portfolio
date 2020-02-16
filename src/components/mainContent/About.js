import React from 'react';
import portrait from '../../assets/portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  
  return (
    <div id='about'>
      <div className="left-content">
        <div className="image-wrap"><img src={portrait} className="image" alt="portrait"/></div>
        <p>I am a Full-stack Developer based in Bay area. </p>
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
            <div className="item">SQL</div>
            <div className="item">Java</div>
            <div className="item">Spring</div>
          </div>
        </div>
        <div className="contact">
          <h2>contact</h2>
          <div className="list">
            <div className="item"><FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: '#2097D1'}} icon={faAt} size='lg'/></div>
            <div className="item"><FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: '#2097D1'}} icon={faLinkedin} size='lg'/></div>
            <div className="item"><FontAwesomeIcon style={{width: '18px', cursor: 'pointer', color: '#2097D1'}} icon={faGithub} size='lg'/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;