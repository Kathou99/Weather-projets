import { useState } from "react";
import "./App.css";
import "./colors.css";
import Search from "./Search";
import Forecast from "./Forecast";
import WeatherInformation from "./WeatherInformation";
// import Forecast from "./Forecast";

export default function App() {
  let [currentWeather, setCurrentWeather] = useState(null);
  let [currentLocation, setCurrentLocation] = useState(null);
  let [useFahrenheit, setUseFahrenheit] = useState(null);

  function updateData(weatherInfo, locationInfo) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let currentTime = new Date();
    let day = days[currentTime.getDay()]; // returns a value between 0 and 6.

    let hours = currentTime.getHours();
    let minutes = String(currentTime.getMinutes()).padStart(2, "0");
console.log(weatherInfo.current.weather[0].icon)
    setCurrentWeather({
      humidity: weatherInfo.current.humidity,
      windSpeed: Math.round(weatherInfo.current.wind_speed * 3.6),
      feelsLike: weatherInfo.current.feels_like,
      lastUpdated: `${day}, ${hours}:${minutes}`, 
      imgSrc: `https://openweathermap.org/img/wn/${weatherInfo.current.weather[0].icon}.png`,
      currTemp: weatherInfo.current.temp,
      description: weatherInfo.current.weather[0].main,
    });

    setCurrentLocation(locationInfo);
  }

  return (

    <div className="App">
      <div className="container">
          <div className="row top-level-row">
            <div className="row top-level-row align-items-center">
              <div className="col">
                <Search updateFunction={updateData} />
              </div>
            </div>
          </div>
          <div className="color-inside">
          <WeatherInformation
            weatherInfo={currentWeather}
            locationInfo={currentLocation}
            useFahrenheit={useFahrenheit}
            setUseFahrenheit={setUseFahrenheit}
          />
              <Forecast />
          {/*
          <hr />
          <Forecast />
          */}
        </div>
  
     <br/>
     <br/>
     <br/>
        <div className="row">
       
       
          <div className="signature">
            <a
              href="https://github.com/Kathou99/weather-app-react/tree/main"
              rel="noreferrer"
              target="_blank"
            >
              Open-sourced on GitHub
            </a>
            <span className="footer-text"> by </span>
            <a
              href="https://www.linkedin.com/in/katherine-st-amand/"
              rel="noreferrer"
              target="_blank"
            >
              KathouQC
            </a>
            <span className="footer-text"> and hosted on </span>
            <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">
              Netlify
            </a>
          </div>
        </div>
      </div>
      </div>
  );
}