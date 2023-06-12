import React, { useState, useEffect } from "react";
import "./weather.css";

const Weather = ({ toggleWeather } ) => {
    const [zipCode, setZipCode] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    };
    
    const fetchWeatherData = async () => {
        const apiKey = 'bcb072f79b1c4371bcb212854231904';
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${zipCode}&aqi=no`);
        const data = await response.json();

        if (data && !data.error) {
            setWeatherData(data);
          } else {
            setWeatherData(null);
            alert('Error fetching weather data. Please check your ZIP code and try again.');
        }
        
        setZipCode('');
    };
    return (
        <div className="weather">

            <div className='weather-header-and-input'>  
                <h2 id='weatherHeader'>Weather</h2>
                <div className="weather-input">
                    <input
                    type="text"
                    placeholder="Enter ZIP Code"
                    value={zipCode}
                    onChange={handleZipCodeChange}
                    />
                    <button id='getWeatherButton' onClick={fetchWeatherData}>Get Weather</button>
                    <div id='weatherXicon'>
                        <ion-icon name="close-outline" onClick={toggleWeather}></ion-icon>
                    </div>
                </div>
            </div>
            
          {weatherData && (
            <div className="weather-info">
              <h3>
                {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}
              </h3>
              <p className='weather-condition'>{weatherData.current.condition.text}</p>
              <p className='weather-temps'>Temperature: {weatherData.current.temp_f}°F</p>
              <p className='weather-temps'>Feels Like: {weatherData.current.feelslike_f}°F</p>
            </div>
          )}
        </div>
    );
}; 

export default Weather; 


  