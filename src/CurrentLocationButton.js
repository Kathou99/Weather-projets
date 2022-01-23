import React from "react";
import axios from "axios";
import { apiKey, units } from "./constants";

import "./CurrentLocationButton.css";

export default function CurrentLocationButton({ handleWeatherResponse }) {
  function handleClickLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}`;
      axios.get(`${apiUrl}&appid=${apiKey}`).then((response) => {
        let locationData = {
          country: response.data.sys.country,
          name: response.data.name,
        };
        apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}`;
        axios
          .get(`${apiUrl}&appid=${apiKey}`)
          .then((response) => handleWeatherResponse(response, locationData));
      });
    });
  }

  return (
    <div className="CurrentLocationButton">
      <button
        className="btn btn-primary centered"
        id="current-loc"
        onClick={handleClickLocation}
      >
        <div className="row align-items-center">
          <div className="col-1 col-sm-12 col-md-1">
            <i className="fas fa-search-location fa-1x" />
          </div>
          <div className="col">
        
            <span>Current Location</span>
          </div>
        </div>
      </button>
    </div>
  );
}