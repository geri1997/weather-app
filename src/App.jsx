import { useEffect, useState } from "react";
import { fahrenheitToCelsius } from "./utils/FtoC";
import { getCurrentLocation } from "./utils/getCurrentLocation";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (currentLocation !== null)
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentLocation[0]}&lon=${currentLocation[1]}&units=metric&appid=0bce3262f44d23505178b7051da8b926
  `)
        .then((res) => res.json())
        .then((weather) => setWeatherInfo(weather));
  }, [currentLocation]);

  return (
    <div className="App">
      <p>Get the weather forecast for you location</p>
      <button onClick={() => getCurrentLocation(setCurrentLocation)}>
        Get forecast
      </button>

      {weatherInfo && (
        <div className="weather">
          <h4>Latitude: {weatherInfo.lat}</h4>
          <h4>Longitude: {weatherInfo.lat}</h4>
          <h4>Timezone: {weatherInfo.timezone}</h4>
          <h4>Current Temperature: {Math.floor(weatherInfo.current.temp)} C</h4>
          <h3>Daily temperature:</h3>
          <div style={{display:'grid', 'gridAutoFlow':'column'}} className="daily">
            {weatherInfo.daily.map(day=>{
             return <div className="day">
                <p>High: {Math.floor(day.temp.day)} C</p>
                <p>Low: {Math.floor(day.temp.night)} C</p>

              </div>
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
