import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // İstediğiniz şehri burada ayarlayabilirsiniz
  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );

        setWeatherData(response.data);
      } catch (error) {
        console.error('Hava durumu bilgileri alınamadı.', error);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  return (
    <div>
      {weatherData && (
        <div>
          <h2>{weatherData.name} Hava Durumu</h2>
          <p>Sıcaklık: {weatherData.main.temp}°C</p>
          <p>Durum: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;