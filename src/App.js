import React, { Component } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  './styles/bootstrap.min.css'
import NavBar from './components/nav/NavBar'

import {Route} from 'react-router-dom'

import HomePage from  './pages/HomePage'
import SelectOpponentsPage from './pages/SelectOpponentsPage'
import AboutPage from './pages/AboutPage'

class App extends Component {
  render() {
    return (
      <div >
        <NavBar />

        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/selectopp" name="Select Opponents" component={SelectOpponentsPage} />
          <Route path="/about"  name="About" component={AboutPage}/>
        </div>
      </div>
    );
  }
}

export default App;
