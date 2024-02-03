import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Forecast = ({ data }) => {
  const WEEK_DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek + 1, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek + 1)
  );

  return (
    <>
      <label className="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min - 273.15)}°C/
                    {Math.ceil(item.main.temp_max - 273.15)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <div className="daily-details-grid-item-label">
                    <label className="daily-details-grid-item-label-text">
                      Humidity
                    </label>
                  </div>
                  <div className="daily-details-grid-item-value">
                    {item.main.humidity}%
                  </div>
                </div>

                <div className="daily-details-grid-item">
                  <div className="daily-details-grid-item-label">
                    <label className="daily-details-grid-item-label-text">
                      Pressure
                    </label>
                  </div>
                  <div className="daily-details-grid-item-value">
                    {item.main.pressure}hpa
                  </div>
                </div>

                <div className="daily-details-grid-item">
                  <div className="daily-details-grid-item-label">
                    <label className="daily-details-grid-item-label-text">
                      Clouds
                    </label>
                  </div>
                  <div className="daily-details-grid-item-value">
                    {item.clouds.all}%
                  </div>
                </div>

                <div className="daily-details-grid-item">
                  <div className="daily-details-grid-item-label">
                    <label className="daily-details-grid-item-label-text">
                      Wind Speed:
                    </label>
                  </div>
                  <div className="daily-details-grid-item-value">
                    {item.wind.speed}m/s
                  </div>
                </div>

                <div className="daily-details-grid-item">
                  <div className="daily-details-grid-item-label">
                    <label className="daily-details-grid-item-label-text">
                      Sea-level:
                    </label>
                  </div>
                  <div className="daily-details-grid-item-value">
                    {item.main.sea_level}m
                  </div>
                </div>

                <div className="daily-details-grid-item">
                  <div className="daily-details-grid-item-label">
                    <label className="daily-details-grid-item-label-text">
                      Feels Like
                    </label>
                  </div>
                  <div className="daily-details-grid-item-value">
                    {Math.round(item.main.feels_like - 273.15)}°C
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
