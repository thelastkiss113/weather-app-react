import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
const [city, setCity] = useState(" ");
const [temperature, setTemperature] = useState(null);
const [humidity, setHumidity] = useState(null);
const [wind, setWind] = useState(null);
const [description, setDescription] = useState(null);
const [message, setMessage] = useState(" ");

// get the city on search input
function cityInput(event) {
    event.preventDefault();
    setCity(event.target.value);
}

// handle submit - api request
function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0506851da960e862cc6aa8a01e456c9&units=metric`;
    axios.get(apiUrl).then(showWeatherInfo);
}

// get data from axios
function showWeatherInfo(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    let icon = `https://openweathermap.org/img/w/${response.data.weather[0].icon}.png`;
    setMessage(
        <div>
            <ul>
                <li className="city">The weather in {city}: </li>
                <li>Temperature: {Math.round(temperature)} ºC</li>
                <li>Description: {description}</li>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {Math.round(wind)} km/h</li>
                <li>
                    <img src={icon} alt="img" />
                </li>
            </ul>
        </div>
    );
}

return (
    <div className="Search">
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={cityInput} />
            <button>Search</button>
        </form>
        <div>{message}</div>

        <footer>
            <p>Coded by <a href="https://github.com/thelastkiss113/WeatherApp-React" target="_blank">Open Souce Code Jessica Blum</a></p>
        </footer>
    </div>

      
        

);
}