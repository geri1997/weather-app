import Weather from "./components/Weather.jsx";
import useWeather from "./hooks/useWeather.js";
import { getCurrentLocation } from "./utils/getLocation.js";

function App() {
  const { setCurrentLocation, weatherInfo, getChosenCity } = useWeather();

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

      <Weather weatherInfo={weatherInfo}/>
    </div>
  );
}

export default App;
