import React, {useState, useEffect} from 'react';

function Weather(){
const [weather, setWeather] = useState([])

  useEffect(() => {
    async function getWeather() {
      try{
        const res = await fetch(`https://api.met.no/weatherapi/locationforecast/1.9/.json?lat=52.4597&lon=1.9617`) 
        const data = await res.json();
        setWeather(data.product.time[0].location.temperature);
      }catch (err) {
      console.log(err)
    } 
    }
    getWeather()
  }, [])

  console.log(weather)
  return (
    <div className="App">
    <p>
  <h1>Current Temperature in Harborne</h1>
         {weather.value} <br></br>
         {weather.unit}
          </p>
    </div>
  )
}


  export default Weather;


