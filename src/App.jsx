import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./Components/Search/Search";
import CurrentWeather from "./Components/currentweather/CurrentWeather";
import { weatherApiKey, weatherApiUrl } from "./api";
import Forecast from "./Components/forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = await fetch(
      `${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    );

    const forecastFetch =
      await fetch(`${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}
    `);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({
          city: searchData.label,
          ...currentWeatherResponse,
        });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      {currentWeather && (
        <CurrentWeather data={currentWeather}></CurrentWeather>
      )}
      {forecast && <Forecast data={forecast}></Forecast>}
    </div>
  );
}

export default App;
