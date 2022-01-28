import React, { useEffect, useState } from 'react';
import { getWeather } from '../utils/getWeather';

const useWeather = () => {
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




  return {getChosenCity,setCurrentLocation,weatherInfo}
};

export default useWeather;
