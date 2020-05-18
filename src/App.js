import React from 'react';
import './App.css';
import Home from "./components/Home"
import Space from "./components/Space"
import Weather from "./components/Weather"
import Beer from "./components/Beer"
import {Route, Switch, BrowserRouter as Router,} from "react-router-dom";



function App() {

  return (
    

   
   <Router>

  
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
            <Home />
            
          </Route>
        </Switch> 
    
   </Router>
  

   
   
  )
  }
  export default App;


    
  
  
 

 
 


