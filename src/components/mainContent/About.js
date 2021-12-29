import React from 'react';
import portrait from '../../assets/portrait.jpg';

const About = (props) => {

  const handleClick = () => {
    props.history.push("/projects")
  }

  return (
    <div id='about'>
      <div className="top-content">
        <div className="left-box">
          <div className="title">FULL STACK ENGINEER</div>
          <div className="name">Leana Neparidze</div>
          <p>I am a full-stack engineer based in the Bay Area. I value technical challenges and enjoy building beautiful applications.</p>

          <p>As a self-taught programmer, I identify my strengths as being passionate about what I do, constantly improving, and empathizing with others. </p>

          <p>Currently, I work as a Software Engineer at Northwestern Mutual. Our team is developing a Content Management System that backs over 8,000 websites. We use Go, AWS, and Vue.js.</p>

          <p>In my free time, I enjoy outdoor activities: hiking, biking, or picnicking at the local park.</p>

          <div className="skills">
            <h2>Skills</h2>
            <div className="list">
              <div className="item">Go |</div>
              <div className="item">AWS |</div>
              <div className="item">JavaScript |</div>
              <div className="item">React |</div>
              <div className="item">Vue |</div>
              <div className="item">Python |</div>
              <div className="item">SQL |</div>
              <div className="item">NoSQL |</div>
              <div className="item">Java |</div>
              <div className="item">Spring</div>
            </div>
          </div>

          <div className="home-projects-button">
            <div className="linkReg" to="/projects" onClick={handleClick}>
              Projects</div>
          </div>

        </div>
        <div className="right-box">
          <div className="image-wrap"><img src={portrait} className="image" alt="portrait"/></div>
        </div>
      </div>
      
    </div>
  );
};

export default About;