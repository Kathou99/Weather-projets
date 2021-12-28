
let currentTime = new Date();
let currentLocationButton = document.querySelector(".locationButton");
let searchEngine = document.querySelector("#search-form");

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function formatDate(date) {
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  let months = [ "January", "February", "March", "April","May","June","July","August","September","October", "November","December"];

   let min = date.getMinutes();
   let seconds = date.getMilliseconds();
   let currentYear = date.getFullYear();
   let currentDay = days[date.getDay()];
   let currentMonth = months[date.getMonth()];
   let currentDate = date.getDate();
   let hours = date.getHours();
  let formattedDates = `${currentDay} | ${currentMonth} ${currentDate} | ${currentYear} | ${hours} : ${min}`;

  return formattedDates;
}

let dateElement = document.querySelector("#date-and-time");

dateElement.innerHTML = formatDate(currentTime);

//SEARCH ENGINE

//Search City
function searchCity(event) {
  event.preventDefault();
  console.log(event)
  let searchInput = document.querySelector("#location-selector");
  if (searchInput.value !== "") {
    let searchInput = document.querySelector("#location-selector");
    let h1 = document.querySelector("#city");
    h1.innerHTML = `${searchInput.value}`;
    let apiKey = "f570a1fbc37130aef5bf06a2e40664d1";
    let units = "metric";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?q=${searchInput.value}&units=${units}`;
  
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
} else {
  event.preventDefault();
  alert(`Please Check the name of the city you have enter :) `);

  } 
}
let searchForm = document.querySelector("#input-group , #search-form,#location-selector");
searchForm.addEventListener("submit", searchCity);


//Show temperature

function showTemperature(response) {
    let iconElement = document.querySelector(`#icon`);
    let temperature = `${Math.round(response.data.main.temp)}°C`;
    let temperatureElement = document.querySelector(`#temperature-display`);
    let currentTemp = Math.round(response.data.main.temp);
    let displayCity = document.querySelector(`h1`);
    let displayWeatherCondition = document.querySelector(`#currentweather`);
    let displayWind = document.querySelector(`#wind-selector`);
    let displayHumidity = document.querySelector(`#humidity-selector`);
    let displayRealFeel = document.querySelector(`#feellike`);
    let temp_min = document.querySelector(`#temp_min`)
    let temp_max = document.querySelector(`#temp_max`) 
    let pressure = document.querySelector(`#pressure`)
    let visibility = document.querySelector(`#visibility`)
    let clounds = document.querySelector(`#clounds`)
    iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = temperature;
    temperatureElement.innerHTML = `${currentTemp} °C`;
    realFeelCelsius = response.data.main.feels_like;
    celsiusTemperature = response.data.main.temp;
    displayCity.innerHTML = response.data.name;
    displayWeatherCondition.innerHTML = `<b>Now:</b> ${response.data.weather[0].description}`;
    displayWind.innerHTML = `<b>Wind:</b> ${Math.round(response.data.wind.speed)} km/h`;
    displayHumidity.innerHTML = `<b>Humidity</b> ${response.data.main.humidity}%`;
    displayRealFeel.innerHTML = `<b> Feel like:</b> ${Math.round(realFeelCelsius)}° C`;
    temp_min.innerHTML = `<b> Temps Min:</b> ${Math.round(response.data.main.temp_min)}° C`;
    temp_max.innerHTML = `<b> Temps Max:</b> ${Math.round(response.data.main.temp_max)}° C`;
    pressure.innerHTML = `<b> Pressure:</b> ${Math.round(response.data.main.pressure)} Ka`;
    visibility.innerHTML = `<b> Visibility:</b> ${Math.round(response.data.visibility)}`;
    clounds.innerHTML =  `<b> Clounds:</b> ${Math.round(response.data.clouds.all)}%`;
    getforecast(response.data.coord);
}
// Show Geocordinates
function showCurrentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "f570a1fbc37130aef5bf06a2e40664d1";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";

  axios
    .get(
      `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    )
    .then(showTemperature);
}

let btn = document.querySelector("#location-button");
btn.addEventListener("click", getCurrentLocation);
navigator.geolocation.getCurrentPosition(showCurrentPosition);

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}

function getforecast(coordinates) {
  console.log(coordinates);
  let apiKey = "c2a98dac7a66049f64b0810dd03180a2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  let apiKey2 = "1c7c88bbd12d265936fef31a47a3c9be";
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey2}`;
  console.log(apiUrl2);
  axios.get(apiUrl2).then(displayForecast);
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}
//Search 7 days
function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class= "row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
     <div class= "col-2">
      <div class = "weather-forecast-date">${formatDay(forecastDay.dt)}</div>
       <img
        src="https://openweathermap.org/img/wn/${
          forecastDay.weather[0].icon
        }@2x.png"
        alt= ""
        width="125"/>
        <div class = "weather-forecast-temperatures">
          <span class= "weather-forecast-temperature-max">
            ${Math.round(forecastDay.temp.max)}°
          </span> 
           <span class= "weather-forecast-temperature-min">
            ${Math.round(forecastDay.temp.min)}°
          </span>
        </div>
        </div>
         `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}



function getforecast(coordinates) {
  console.log(coordinates);
  let apiKey = "c2a98dac7a66049f64b0810dd03180a2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}

function showFahrenheitTemp(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let showTemperature = document.querySelector("#temperature-display");
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  showTemperature.innerHTML = `${Math.round(fahrenheitTemp)}° F`;

   let showRealFeel = document.querySelector(`#feellike`);
  convertRealFeel = realFeelCelsius * 1.8 + 32;
  showRealFeel.innerHTML = `<b> Feel like:</b> ${Math.round(convertRealFeel)}° F`;

 
}

function showCelsiusTemp(event) {
  event.preventDefault();
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  let showTemperature = document.querySelector("#temperature-display");
  showTemperature.innerHTML = `${Math.round(celsiusTemperature)}° C`;
 
  let showRealFeel = document.querySelector(`#feellike`);
  showRealFeel.innerHTML = `<b> Feel like:</b> ${Math.round(realFeelCelsius)}° C`;
  
}

let realFeelCelsius = null;
let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);
