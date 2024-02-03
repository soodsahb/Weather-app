import React from "react";
import "./currentweather.css";

const CurrentWeather = ({ data }) => {
  const Temperature = data.main.temp - 273.15;
  const feelsLike = Math.round(data.main.feels_like - 273.15);

  return (
    <div className="weather">
      <div className="top">
        <div className="sub-top">
          <p className="city">{data.city}</p>
          <p className="weather-description">
            {data.weather[0].description.toUpperCase()}
          </p>
        </div>

        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <div className="temperature">{Math.round(Temperature)}°C</div>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label details-span">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like </span>
            <span className="parameter-value">{feelsLike}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
