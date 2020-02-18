import React from 'react';
import { withRouter } from "react-router";


const Home = (props) => {

  const handleClick = () => {
    props.history.push("/projects")
  }

  return (
    <div id='home'>
      <h1>Full-stack Developer</h1>
      <h2>hi. I am Leana. I love to build beautiful, interactive applications.</h2>
      <div className="home-projects-button">
        <div className="linkReg" to="/projects" onClick={handleClick}>
              projects</div>
      </div>
      <div className="butterfly-small"></div>
    </div>
  );
};

export default withRouter(Home);