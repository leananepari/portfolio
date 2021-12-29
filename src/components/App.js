import React from 'react';
import '../css/styles.css';
import { Route, Switch } from "react-router-dom";
import Projects from '../components/mainContent/ProjectList';
import About from '../components/mainContent/About';
import NavBar from '../components/header/NavBar';
import Form from '../components/mainContent/Form';
import Resume from '../components/mainContent/Resume';
import Footer from '../components/footer/Footer';

const App = () => {

  return (
    <div>
      <NavBar/>

      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route  path='/emailme' component={Form} />
      </Switch>

      <Footer/>

    </div>
  );
  
}

export default App;


