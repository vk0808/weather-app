import React from "react";
import { useWeatherSearch } from "../context";

const Weather = () => {
  const { weather } = useWeatherSearch();

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return { day, date, month, year };
  };

  const { day, date, month, year } = dateBuilder(new Date());

  return (
    <>
      {(typeof weather.main !== "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">
              <span className="day">{day}, </span>
              {date} {month} {year}
            </div>
          </div>
          <div className="weather-box">
            <div className="temperature">
              {Math.round(weather.main.temp)}
              &#0176;c
              <div className="sub-details">
                <p><span className="day">feels like: </span>{weather.main.feels_like} &#0176;c</p>
                <p><span className="day">speed: </span>{weather.wind.speed} m/s</p>
                <p><span className="day">humidity: </span>{weather.main.humidity} %</p>
                <p><span className="day">pressure: </span>{weather.main.pressure} hPa</p>
              </div>
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : ('')}
    </>
  );
};

export default Weather;
