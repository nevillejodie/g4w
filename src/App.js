import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Animation from "./components/icons"
import ReactAnimatedWeather from 'react-animated-weather';
import { motion } from "framer-motion"
import Space from "./components/Space"
import Weather from "./components/Weather"
import Beer from "./components/Beer"
import {Route, Switch, BrowserRouter as Router, Link} from "react-router-dom";

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'yellow',
  size: 312,
  animate: true
};

function App() {



  return (
    
    <div className="App">
      <div className="sunny">
      <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
  <p className="font">
          Happy Birthday Greg
          </p>
          <p className="welcome-font">
          Welcome to your App. I included some things I thought you'd like:
          <>
            <p>Astronomy Picture of the Day</p>
            <p>A random beer generator</p>
            <p>A weather forecaster</p>
          </>
         </p>
   
   {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/beer">Beer</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/space">Space</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/beer">
            <Beer />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/space">
            <Space />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
   </Router>
    </div>
    </div> */}

    </div>
    </div>
   
  )
  }
  export default App;


    
  
  
 

 
 


