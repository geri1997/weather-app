import { useEffect, useState } from "react";

import { getCurrentLocation } from "./utils/getLocation.js";
import { getWeather } from "./utils/getWeather.js";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (currentLocation !== null)
      getWeather(currentLocation[0], currentLocation[1]).then((weather) =>
        setWeatherInfo(weather)
      );
  }, [currentLocation]);

  function getChosenCity(city) {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=0bce3262f44d23505178b7051da8b926`
    )
      .then((res) => res.json())
      .then((city) => {
        getWeather(city[0].lat, city[0].lon).then((weather) =>
          setWeatherInfo(weather)
        );
      });
  }

  return (
    <div className="App">
      <p>Get the weather forecast for your current location</p>
      <button onClick={() => getCurrentLocation(setCurrentLocation)}>
        Get forecast
      </button>
      <div>Or get forecast for specific city below</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // @ts-ignore
          getChosenCity(e.target.city.value);
        }}
      >
        <input name="city" type="text" />
        <button type="submit">Get forecast</button>
      </form>

      {weatherInfo && (
        <div className="weather">
          <h4>Latitude: {weatherInfo.lat}</h4>
          <h4>Longitude: {weatherInfo.lat}</h4>
          <h4>Timezone: {weatherInfo.timezone}</h4>
          <h4>Current Temperature: {Math.floor(weatherInfo.current.temp)} C</h4>
          <h3>Daily temperature:</h3>
          <div
            style={{ display: "grid", gridAutoFlow: "column" }}
            className="daily"
          >
            {weatherInfo.daily.map((day,i) => {
              return (
                <div key={i} className="day">
                  <p>High: {Math.floor(day.temp.day)} C</p>
                  <p>Low: {Math.floor(day.temp.night)} C</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
