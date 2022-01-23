import React, { useEffect } from "react";
import "./Search.css";
import CurrentLocationButton from "./CurrentLocationButton";
import { apiKey, units } from "./constants";
import axios from "axios";

export default function Search({ updateFunction }) {
  function handleWeatherResponse(response, locationData) {
    updateFunction(response.data, locationData);
  }

  function searchCity(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;
    let lat;
    let lon;
    axios.get(`${apiUrl}&appid=${apiKey}`).then((response) => {
      lat = response.data.coord.lat;
      lon = response.data.coord.lon;
      let locationData = {
        country: response.data.sys.country,
        name: response.data.name,
      };
      apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}`;
      axios
        .get(`${apiUrl}&appid=${apiKey}`)
        .then((response) => handleWeatherResponse(response, locationData));
    });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => searchCity("Montréal"), []);

  function handleSearch(event) {
    event.preventDefault();
    let input = document.querySelector("#city-input");
    searchCity(input.value);
  }

  return (
    <div className="Search">
      <form className="search-bar" id="search-bar" onSubmit={handleSearch}>
        <div className="row align-items-center">
          <div className="col-6 md-8">
            <input
              type="text"
              className="text-input"
              id="city-input"
              placeholder="Enter a city..."
              autoComplete="off"
            />
          </div>
          <div className="col">
            <input
              type="submit"
              className="btn btn-primary submit-btn"
              label="Search"
              value="Search"
            />
          </div>
          <div className="col">
            <CurrentLocationButton
              handleWeatherResponse={handleWeatherResponse}
            />
          </div>
        </div>
      </form>
    </div>
  );
}