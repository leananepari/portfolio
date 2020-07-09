import React from 'react';
import '../css/styles.css';
import { Route, Switch } from "react-router-dom";
import Home from '../components/mainContent/Home';
import Projects from '../components/mainContent/ProjectList';
import About from '../components/mainContent/About';
import NavBar from '../components/header/NavBar';
import Form from '../components/mainContent/Form';

const App = () => {

  return (
    <div>
      <NavBar/>

      <Switch>
        <Route exact path='/' component={About} />
        {/* <Route  path='/' component={About} /> */}
        <Route exact path='/projects' component={Projects} />
        <Route  path='/emailme' component={Form} />
      </Switch>

    </div>
  );
  
}

export default App;


