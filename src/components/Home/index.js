import ReactAnimatedWeather from 'react-animated-weather';
import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom"

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'yellow',
  size: 312,
  animate: true
};

function Home() {
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
   </p>
   <Link to="/space"><p>Astronomy Picture of the Day</p></Link>
   <Link to="/beer"><p>A random beer generator</p></Link>
   <Link to="/weather"><p>The weather forecast</p></Link>
   </div>
   </div>
  )
}

export default Home;
