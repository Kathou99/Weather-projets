import React from "react";
import LocationInfo from "./LocationInfo";
import TempConversion from "./TempConversion";
import { convertToFahrenheit } from "./constants";
import "./WeatherInformation.css";

export default function WeatherInformation({
  weatherInfo,
  locationInfo,
  useFahrenheit,
  setUseFahrenheit,
}) {
  if (weatherInfo) {
    return (
      <div className="WeatherInformation">
        <div className="row top-level-row">
          <div className="col">
            {locationInfo ? (
              <LocationInfo
                name={locationInfo.name}
                country-code={locationInfo.country}
              />
            ) : (
              <h3>Loading...</h3>
            )}
            <br />
            <div id="humidity">
              Humidity:{" "}
              <span id="current-humidity">{weatherInfo.humidity}%</span>
            </div>
            <div id="wind-speed">
              Wind:{" "}
              <span id="current-wind-speed">
                {Math.round(weatherInfo.windSpeed)} km/h
              </span>
            </div>
            <div id="feels-like">
              Feels like:{" "}
              <span id="current-wind-chill">
                {useFahrenheit
                  ? `${Math.round(
                      convertToFahrenheit(weatherInfo.feelsLike)
                    )}°F`
                  : `${Math.round(weatherInfo.feelsLike)}°C`}
              </span>
            </div>
            <br />
            <div id="last-updated">
              Last updated:{" "}
              <span id="current-time">{weatherInfo.lastUpdated}</span>
            </div>
          </div>
          <div className="col-3" />
          <div className="col">
            <div className="row">
              <div className="col no-padding">
                <img
                  className="icon centered-img"
                  id="current-weather-icon"
                  src={weatherInfo.imgSrc}
                  alt={weatherInfo.description}
                />
              </div>
              <div className="col align-self-center">
                <div className="row no-gutters">
                  <div className="col no-padding centered">
                    <span id="current-temp">
                      {useFahrenheit
                        ? Math.round(convertToFahrenheit(weatherInfo.currTemp))
                        : Math.round(weatherInfo.currTemp)}
                    </span>
                  </div>
                  <div className="col align-self-center">
                    <TempConversion
                      useFahrenheit={useFahrenheit}
                      setUseFahrenheit={setUseFahrenheit}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="centered" id="description">
                  {weatherInfo.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherInformation">
        <div className="row top-level-row">
          <div className="col">
            <div className="align-self-center">
              <h1>Loading...Please wait</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}