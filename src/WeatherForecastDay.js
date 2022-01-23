import React from "react";
import "./WeatherForecastDay.css"



export default function WeatherForecastDay (props) {

  
    
    function maxTemp(){        
        let temp = Math.round(props.dayData.temp.max);
        return `${temp}º`;
    };

    function minTemp(){
        let temp = Math.round(props.dayData.temp.min);
        return `${temp}º`;
    };

    function day(){
        let date = new Date(props.dayData.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }
    let imgUrl = `https://openweathermap.org/img/wn/${props.dayData.weather[0].icon}@2x.png`;
    console.log(props)
    
    
    return (
    <div className="weatherForecastData">
        <div className="forecastDay">
            {day()}
        </div>
        <img src={imgUrl} alt={props.dayData.weather[0].main} className="icon-cloudy" id="icon" />                    
        <div className="forecastTemp">
            <span className="forecastTempMax temp">{maxTemp()}</span>
            |
            <span className="forcastTempMin temp" >{minTemp()}</span>
        </div>
     </div>
);
     
};