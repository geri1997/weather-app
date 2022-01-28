export function getWeather(lat, long) {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=0bce3262f44d23505178b7051da8b926
  `)
    .then((res) => res.json())
    
}
