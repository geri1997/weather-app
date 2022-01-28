import React from "react";

const DailyWeather = ({weatherInfo}) => {
  return (
    <>
      {weatherInfo.daily.map((day, i) => {
        return (
          <div key={i} className="day">
            <p>High: {Math.floor(day.temp.day)} C</p>
            <p>Low: {Math.floor(day.temp.night)} C</p>
          </div>
        );
      })}
    </>
  );
};

export default DailyWeather;
