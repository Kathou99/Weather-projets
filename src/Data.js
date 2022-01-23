import React from "react";
import "./Data.css";

export default function Data() {
  return (
    <div className="today">
      <h1>Forecast for Québec</h1>

      <div className="row">
        <div className="col-3">
          <h2 id="first-day">
            <span className="week" id="month-current-date">
              January 1
            </span>
            <br />
            <span id="date"> Saturday 15:39 </span>
          </h2>
        </div>

        <div className="col-3">
          <h3 id="temp-input">-16°C</h3>
          <br />
          <span className="celsiusFahrenheit"> -20°C</span>
          <h4>Feels like</h4>
        </div>

        <div className="col-3">
          <div className="image">
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt=""
              className="image"
              id="main-icon"
            />
          </div>
          <div className="weather" id="description">
            Cloudy
          </div>
        </div>

        <div className="col-3">
          <ul id="weatherinfo">
            <li id="humidity-selector">Humudity: 83%°</li>
            <br />
            <li id="wind-selector">Wind: 8km/hr</li>
            <br />
            <li id="temp_max"> High: 33°</li>
            <br />
            <li id="temp_min"> Low: 13°</li>
            <br />
            <li id="pressure"> 75ka</li>
          </ul>
        </div>
      </div>

      <div className="factors-climate">
        <ul>
          <li id="humidity"> Humidity:35 </li>
          <li id="wind"> Wind: NNW 8 </li>
        </ul>
      </div>
    </div>
  );
}