import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-2">
          Sat 1
          <br />
          <img
            src="http://openweathermap.org/img/wn/13d@2x.png"
            alt=""
            className="image"
            id="icon"
          />
          <br />
          Hi/lo
        </div>

        <div className="col-2">
          Sun 2
          <br />
          <img
            src="http://openweathermap.org/img/wn/10n@2x.png"
            alt=""
            className="image"
            id="icon"
          />
          <br />
          Hi/lo
        </div>

        <div className="col-2">
          Mon 3
          <br />
          <img
            src="http://openweathermap.org/img/wn/09d@2x.png"
            alt=""
            className="image"
            id="icon"
          />
          <br />
          Hi/lo
        </div>

        <div className="col-2">
          Tue 4
          <br />
          <img
            src="http://openweathermap.org/img/wn/13d@2x.png"
            alt=""
            className="image"
            id="icon"
          />
          <br />
          Hi/lo
        </div>

        <div className="col-2">
          Wed 5
          <br />
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt=""
            className="image"
            id="icon"
          />
          <br />
          Hi/lo
        </div>

        <div className="col-2">
          Thu 6
          <br />
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt=""
            className="image"
            id="icon"
          />
          <br />
          Hi/lo
        </div>

        <div className="col-2">
          Fri 7
          <br />
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt=""
            className="image"
            id="icon"
          />
          <br />
          Hi/lo
        </div>

        <div className="col-2">
          Sat 8
          <br />
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt=""
            className="image"
            id="icon"
          />
          <br />
          Hi/lo
        </div>
      </div>

      <br />
      <footer id="text-forcast">Daily forecast for the next 7 days</footer>
    </div>
  );
}
