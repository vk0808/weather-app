import React from "react";

const Weather = () => {
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return {day, date, month, year}
  }
  const {day, date, month, year} = dateBuilder(new Date())
  return (
    <div>
      <div className="location-box">
        <div className="location">
          New York City, US
        </div>
        <div className="date">
          <span className="day">{day}, </span>
          {date} {month} {year}
        </div>
      </div>
      <div className="weather-box">
        <div className="temperature">
          15 &#8451;
        </div>
        <div className="weather">
          sunny
        </div>
      </div>
    </div>
  );
};

export default Weather;
