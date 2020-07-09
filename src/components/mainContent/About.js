import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import portrait from '../../assets/portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

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

          <p>Currently, I work as a Team Lead at Lambda School. I lead a group of students through a Computer Science curriculum, while guiding, mentoring, and supporting them with their learning journeys.</p>

          <p>In my free time, I enjoy outdoor activities: hiking, biking, or picnicking at the local park.</p>

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

          <div className="home-projects-button">
            <div className="linkReg" to="/projects" onClick={handleClick}>
              projects</div>
          </div>

          {/* <div style={{marginTop: '40px', border: '3px solid #787878'}}>
            <div style={{display: 'grid', textAlign: 'left', 
                         gridTemplateColumns: 'repeat(2, 1fr)', 
                         border: '3px solid #ECECEC'
                         }}>
              <div style={{backgroundColor: '#BFBFBF', padding: '5px'}}>
                LANGUAGES
              </div>
              <div style={{backgroundColor: '#BFBFBF', padding: '5px'}}>
                JavaScript, Python, Java
              </div>
              
            </div>

            <div style={{display: 'grid', textAlign: 'left', 
                         gridTemplateColumns: 'repeat(2, 1fr)', 
                         borderBottom: '3px solid #ECECEC',
                         borderLeft: '3px solid #ECECEC',
                         borderRight: '3px solid #ECECEC'
                         }}>
              <div style={{backgroundColor: '#BFBFBF', padding: '5px'}}>
                FRONTEND
              </div>
              <div style={{backgroundColor: '#BFBFBF', padding: '5px'}}>
                React.js, Redux, HTML5, CSS3, Saas, LESS
              </div>
              
            </div>

            <div style={{display: 'grid', textAlign: 'left', 
                         gridTemplateColumns: 'repeat(2, 1fr)', 
                         borderBottom: '3px solid #ECECEC',
                         borderLeft: '3px solid #ECECEC',
                         borderRight: '3px solid #ECECEC'
                         }}>
              <div style={{backgroundColor: '#BFBFBF', padding: '5px'}}>
                BACKEND
              </div>
              <div style={{backgroundColor: '#BFBFBF', padding: '5px'}}>
                Spring, Node, Django
              </div>
              
            </div>

            <div style={{display: 'grid', textAlign: 'left', 
                         gridTemplateColumns: 'repeat(2, 1fr)', 
                         borderBottom: '3px solid #ECECEC',
                         borderLeft: '3px solid #ECECEC',
                         borderRight: '3px solid #ECECEC'
                         }}>
              <div style={{backgroundColor: '#BFBFBF', padding: '5px'}}>
                DATABASES
              </div>
              <div style={{backgroundColor: '#BFBFBF', padding: '5px'}}>
                PostgreSQL
              </div>
              
            </div>

            <div style={{display: 'grid', textAlign: 'left', 
                         gridTemplateColumns: 'repeat(2, 1fr)', 
                         borderBottom: '3px solid #ECECEC',
                         borderLeft: '3px solid #ECECEC',
                         borderRight: '3px solid #ECECEC'
                         }}>
              <div style={{backgroundColor: '#BFBFBF', padding: '5px'}}>
                OTHER
              </div>
              <div style={{backgroundColor: '#BFBFBF', padding: '5px'}}>
                Git, Visual Studio, IntelliJ, TDD, Agile
              </div>
              
            </div>


          </div> */}


        </div>
        <div className="right-box">
          <div className="image-wrap"><img src={portrait} className="image" alt="portrait"/></div>
        </div>
      </div>

      {/* <div className="bottom-content">
        {/* <div className="skills">
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
        </div> */}
        {/* <div className="contact">
          <h2>contact</h2>
          <div className="list">

            <Link to="/emailme" className="item">
              <FontAwesomeIcon style={{width: '16px', cursor: 'pointer', color: '#2097D1', borderBottom: '1px solid transparent' }} icon={faAt} size='lg'/> 
            </Link>

            <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://www.linkedin.com/in/leana-neparidze");}} className="item"> 
              <FontAwesomeIcon style={{width: '16px', cursor: 'pointer', color: '#2097D1'}} icon={faLinkedin} size='lg'/> 
            </Link>

            <Link to="" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://github.com/leananepari");}} className="item"> 
              <FontAwesomeIcon style={{width: '16px', cursor: 'pointer', color: '#2097D1'}} icon={faGithub} size='lg'/> 
            </Link>

          </div>

          {/* <div className="home-projects-button">
            <div className="linkReg" to="/projects" onClick={handleClick}>
              projects</div>
          </div> */}

        {/* </div> */} 

      {/* </div>  */}
      
    </div>
  );
};

export default About;