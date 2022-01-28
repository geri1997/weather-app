import React from "react";
import DailyWeather from "./DailyWeather";

const Weather = ({ weatherInfo }) => {
  return (
    <>
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
            <DailyWeather weatherInfo={weatherInfo} />
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
