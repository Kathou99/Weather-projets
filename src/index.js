
let currentTime = new Date();
let currentLocationButton = document.querySelector(".locationButton");
let searchEngine = document.querySelector("#search-form");
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

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

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
   let hours = date.getHours();
   let min = date.getMinutes();
   let seconds = date.getMilliseconds();
  let formattedDates = `${currentDay} | ${currentMonth} ${currentDate} | ${currentYear} | ${hours} : ${min}`;

  return formattedDates;
}



let dateElement = document.querySelector("#date-and-time");


//Exercise 2: adding a basic search function

dateElement.innerHTML = formatDate(currentTime);
//bonus feature
function getDegrees() {
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);

  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertToCelsius);
}
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${Math.round(fahrenheitTemperature)}° `;
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
}


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
  alert(`Please Check the name of the city you have enter `);
 // alert(
  //  `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
 // );
  //let searchInput = document.querySelector("#location-selector");
 // let h1 = document.querySelector("#city");
 // h1.innerHTML = `${searchInput.value}`;
 // let apiKey = "f570a1fbc37130aef5bf06a2e40664d1";
 // let units = "metric";
 // let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
 // let apiUrl = `${apiEndpoint}?q=${searchInput.value}&units=${units}`;

  //axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  } 
}
let searchForm = document.querySelector("#input-group , #search-form,#location-selector");
searchForm.addEventListener("submit", searchCity);
console.log(searchCity)

//Show temperature

function showTemperature(response) {
  console.log(response.data);
  // ---------------------------------------------------------------------------
 // let iconElement = document.querySelector("#icon");
 // iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 // iconElement.setAttribute("alt", response.data.weather[0].description);
  // ---------------------------------------------------------------------------
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  // ---------------------------------------------------------------------------
  let temperature = `${Math.round(response.data.main.temp)}°C`;
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature-display");
  temperatureElement.innerHTML = temperature;
  // ----------------------------------------------------------------------------
  let weatherToday = response.data.weather[0].description;
  console.log(response.data.weather[0].description);
  let weatherElement = document.querySelector("#date-time2");
  weatherElement.innerHTML = `Now:${weatherToday}`;

  console.log(response.data);
  console.log(response.data.main.temp);
  let currentTemp = Math.round(response.data.main.temp);
 
  temperatureElement.innerHTML = `${currentTemp} °C`;
  //let apiKey = "f570a1fbc37130aef5bf06a2e40664d1";
 // let searchInput = document.querySelector("#location-selector");
 // let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
///  let units = "metric";
//  let apiUrl = `${apiEndpoint}?q=${searchInput.value}&units=${units}`;
//axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
let displayCity = document.querySelector(`h1`);
let displayWeatherCondition = document.querySelector(`#date-time2`);
let displayWind = document.querySelector(`#wind-selector`);
let displayHumidity = document.querySelector(`#humidity-selector`);
let displayRealFeel = document.querySelector(`#realfeel`);


let realFeelCelsius = response.data.main.feels_like;
//console.log(`${Math.round(realFeelCelsius)}° C`)
let celsius = response.data.main.temp;
displayCity.innerHTML = response.data.name;
  displayWeatherCondition.innerHTML = `Now:${response.data.weather[0].description}`;
  displayWind.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  displayHumidity.innerHTML = `${response.data.main.humidity}%`;
  //displayRealFeel.innerHTML = `${Math.round(realFeelCelsius)}° C`;
 console.log(`${Math.round(realFeelCelsius)}° C`)
}
// Show Geocordinates
function showCurrentPosition(position) {
  console.log(position);
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

//Convert to Celsius
function displayCelsius(event) {
  event.preventDefault();
  let showCelsius = document.querySelector(`#temperature-display`);
  showCelsius.innerHTML = `${Math.round(celsius)}° C`;
  let showRealFeel = document.querySelector(`#realfeel`);
  //showRealFeel.innerHTML = `${Math.round(realFeelCelsius)}° C`;
}
//Convert to Fahrenheit
function displayFahrenheit(event) {
  event.preventDefault();
  let showFahrenheit = document.querySelector(`#temperature-display`);
  console.log(celsius)
  let convertFahrenheit = celsius * 1.8 + 32;
  showFahrenheit.innerHTML = `${Math.round(convertFahrenheit)}° F`;
  let showRealFeel = document.querySelector(`#realfeel`);
  //convertRealFeel = realFeelCelsius * 1.8 + 32;
  //showRealFeel.innerHTML = `${Math.round(convertRealFeel)}° F`;
}



let current_location = document.querySelector("#current-location-button");


let convertToFahrenheitt = document.querySelector(`#fahrenheit`);
convertToFahrenheitt.addEventListener(`click`, displayFahrenheit);

let convertToCelsius = document.querySelector(`#celsius`);
convertToCelsius.addEventListener(`click`, displayCelsius);








////SLIDE BACKGROUND
//var picPaths = ['background/1.jpg','background/2.jpg','background/3.jpg','background/4.jpg','background/5.jpg','background/6.jpg','background/7.jpg'];
//var curPic = -1;
//preload the images for smooth animation
//var imgO = new Array();
//for(i=0; i < picPaths.length; i++) {
 //   imgO[i] = new Image();
 //   imgO[i].src = picPaths[i];
//}

//function swapImage() {
 //   curPic = (++curPic > picPaths.length-1)? 0 : curPic;
  //  imgCont.src = imgO[curPic].src;
 //   setTimeout(swapImage,2000);
//}

//window.onload=function() {
 //   imgCont = document.getElementById('imgBanner');
  //  swapImage();
//}