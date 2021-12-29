import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import resume from '../../assets/Leana_Neparidze_Resume.pdf';

const Resume = () => {

  return (
    <div className="resume">
      <div className="resume-download">
        <a href={resume} download="Leana_Neparidze_Resume.pdf"> Download Resume </a>
      </div>
      <div className="skills-table">
        <div className="cell" style={{border: '3px solid #ECECEC'}}>
          <div style={{backgroundColor: '#E5E5E5', padding: '5px', paddingLeft: '10px', borderRight: '3px solid #ECECEC', letterSpacing: '1px', fontWeight: '500'}}>
            LANGUAGES
          </div>
          <div style={{backgroundColor: '#E5E5E5', padding: '5px'}}>
            Golang, JavaScript, Python
          </div>
          
        </div>

        <div className="cell">
          <div style={{backgroundColor: '#E5E5E5', padding: '5px', paddingLeft: '10px', borderRight: '3px solid #ECECEC', letterSpacing: '1px', fontWeight: '500'}}>
            FRONTEND
          </div>
          <div style={{backgroundColor: '#E5E5E5', padding: '5px'}}>
            React.js, Vue.js, Redux, HTML5, CSS3, Saas
          </div>
          
        </div>

        <div className="cell">
          <div style={{backgroundColor: '#E5E5E5', padding: '5px', paddingLeft: '10px', borderRight: '3px solid #ECECEC', letterSpacing: '1px', fontWeight: '500'}}>
            BACKEND
          </div>
          <div style={{backgroundColor: '#E5E5E5', padding: '5px'}}>
            Gin, Spring, Node
          </div>
          
        </div>

        <div className="cell">
          <div style={{backgroundColor: '#E5E5E5', padding: '5px', paddingLeft: '10px', borderRight: '3px solid #ECECEC', letterSpacing: '1px', fontWeight: '500'}}>
            DATABASES
          </div>
          <div style={{backgroundColor: '#E5E5E5', padding: '5px'}}>
            PostgreSQL, DynamoDB
          </div>
          
        </div>

        <div className="cell">
          <div style={{backgroundColor: '#E5E5E5', padding: '5px', paddingLeft: '10px', borderRight: '3px solid #ECECEC', letterSpacing: '1px', fontWeight: '500'}}>
            OTHER
          </div>
          <div style={{backgroundColor: '#E5E5E5', padding: '5px'}}>
            Git, Visual Studio, IntelliJ, TDD, Agile
          </div>
          
        </div>

      </div>

      <div className="email" >
        <div className="email-word">Email</div> leananeparidze@gmail.com
      </div>
      {/* <div className="resume-download">
        <a href={resume} download="Leana_Neparidze_Resume.pdf"> Download Resume </a>
      </div> */}

      <div className="experiences">
          <h1>
            EXPERIENCE
          </h1>

          <div className="experience">
            <div className="company">
              Northwestern Mutual - Software Engineer 
            </div>
            <div className="date">
              Remote, Jan 2021 - Present
            </div>
            <div className="description">
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Develop internal and customer-facing features across microservices using Go, AWS (SQS, SNS, Lambda, S3, DynamoDB), and Vue</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Provisioned AWS cloud infrastructure using CDK (Python)</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Built internal tool using React and Go to help our marketing team perform admin tasks on customer-facing applications</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Technology Stack: Go, AWS, JavaScript, Python</div>
            </div>
          </div>

          <div className="experience">
            <div className="company">
              Lambda School - Team Lead
            </div>
            <div className="date">
              Remote, Apr 2020 - Present
            </div>
            <div className="description">
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Mentor 10 students on how to learn effectively and solve programming problems while learning Computer Science</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Meet for 1-on-1s daily to discuss progress, review student’s code, and provide feedback on areas of improvement</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Lead daily standup meetings to facilitate the sharing of ideas and work progress, and provide guidance for that week’s study material</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Technology Stack: ​Python</div>
            </div>
          </div>

          <div className="experience">
            <div className="company">
              Crcl- Jr Software Engineer
            </div>
            <div className="date">
              Remote, Mar 2019 - May 2019 (startup ran out of funding)
            </div>
            <div className="description">
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Worked alongside design and remote back-end team to develop the customer facing pages using React and Sass</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Collaborated with QA to target multiple mobile devices and browsers</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Technology Stack: ​JavaScript (React)</div>
            </div>
          </div>

          <div className="experience">
            <div className="company">
              Crcl- Software Engineer Intern
            </div>
            <div className="date">
              Remote, Oct 2018 - Jan 2019
            </div>
            <div className="description">
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Implemented UI components using a Model View Controller architecture using Swift and Xcode</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Collaborated with the designer going through different rounds of iteration and feedback</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Technology Stack: ​Swift</div>
            </div>
          </div>

          <h1>
            EDUCATION
          </h1>
          <div className="experience">
            <div className="company">
              Lambda School
            </div>
            <div className="date">
              ​Full Stack Development and Computer Science - Jun 2019 - Feb 2020
            </div>
            <div className="description">
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Completed and passed all weekly sprints following the agile methodology</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Successfully collaborated with cross-functional teams to build and deploy various full-stack applications</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Passed required assessments 100 percent and got endorsed by the school</div>
              <div><FontAwesomeIcon style={{width: '8px', height: '8px', cursor: 'pointer', color: '#787878', marginRight: '5px', marginBottom: '4px'}} icon={faCircle} size='lg'/>Technology Stack: ​JavaScript (React, Redux), Java (Spring), Python (Django)</div>
            </div>
          </div>

          <div className="experience">
            <div className="company">
              Independent Studies
            </div>
            <div className="date">
              ​Web and Mobile Development - Jan 2017 - Jan 2018
            </div>
          </div>

          <div className="experience">
            <div className="company">
              San Francisco State University
            </div>
            <div className="date">
              ​​Sep 2015 - Jun 2018
            </div>
          </div>
          <div className="experience">
            <div className="company">
              City College of San Francisco
            </div>
            <div className="date">
              A.A. - 2014
            </div>
          </div>

      </div>
    </div>
  )
}

export default Resume